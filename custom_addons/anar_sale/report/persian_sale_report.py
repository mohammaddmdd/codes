from odoo import models

import jdatetime
from persian_tools import digits


class PersianSaleReport(models.AbstractModel):
    _name = 'report.sale.report_saleorder'

    def _get_report_values(self, docids, data=None):

        # get the report action back as we will need its data
        report = self.env['ir.actions.report']._get_report_from_name('sale.report_saleorder')

        # get the records selected for this rendering of the report
        obj = self.env[report.model].browse(docids)

        return {
            'doc_ids': docids,
            'doc_model': self.env[report.model],
            'docs': self.env[report.model].browse(docids),
            'persian_date': digits.convert_to_fa(
                jdatetime.datetime.fromgregorian(
                    datetime=obj.date_order, locale=jdatetime.FA_LOCALE
                ).strftime("%Y/%m/%d")
            )
        }
