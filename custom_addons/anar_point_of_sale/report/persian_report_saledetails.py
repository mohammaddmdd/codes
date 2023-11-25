from odoo import models

import jdatetime
from pytz import timezone
from persian_tools import digits


class PersianSaleDetailsReport(models.AbstractModel):

    _inherit = 'report.point_of_sale.report_saledetails'
    _name = 'report.point_of_sale.report_saledetails'

    def _get_report_values(self, docids, data=None):

        results = super()._get_report_values(docids, data)
        results['persian_date_start'] = self.get_persian_datetime_format(results['date_start'])
        results['persian_date_stop'] = self.get_persian_datetime_format(results['date_stop'])

        return results

    @staticmethod
    def get_persian_datetime_format(gregorian_datetime):

        """

        # this function converts the default gregorian datetime to persian

        :param gregorian_datetime:
        :return:
        """

        # fix timezone manually :)
        # panel timezone setting does not work correctly
        gregorian_datetime = gregorian_datetime.astimezone(timezone('Asia/Tehran'))

        # converting Gregorian datetime to Persian
        persian_datetime = jdatetime.datetime.fromgregorian(
            datetime=gregorian_datetime, locale=jdatetime.FA_LOCALE
        )

        # setting the desired format
        persian_datetime = persian_datetime.strftime("%H:%M:%S %Y/%m/%d")

        # converting the English digits to Persian
        return digits.convert_to_fa(persian_datetime)
