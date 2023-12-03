from odoo import models, _

import jdatetime


class AccountJournal(models.AbstractModel):
    _inherit = 'account.journal'

    def _get_sale_purchase_graph_data(self):

        """
        This function generates Jalali labels for the Kanban view.
        these labels are placed on the chart

        :return: results of the parent except for default labels that are replaced by new Jalali labels
        """

        # converting parent's gregorian parameters to jalali
        jdatetime.set_locale(jdatetime.FA_LOCALE)
        today = jdatetime.date.today()
        day_of_week = today.weekday()
        first_day_of_week = today - jdatetime.timedelta(days=day_of_week)

        # overwriting part of the parent code for generating Jalali labels instead of Gregorian
        labels = []
        for i in range(-1, 3):
            if i == 0:
                label = _('This Week')
            else:
                start_week = first_day_of_week + jdatetime.timedelta(days=i * 7)
                end_week = start_week + jdatetime.timedelta(days=6)
                if start_week.month == end_week.month:
                    label = f"{start_week.day} - {end_week.strftime('%d %B')}"
                else:
                    label = f"{start_week.strftime('%d %B')} - {end_week.strftime('%d %B')}"
            labels.append(label)

        # updating default labels with new Jalali labels
        result = super()._get_sale_purchase_graph_data()
        values = result[1][0]['values']

        for index, item in enumerate(values):
            if index not in (0, 2, 5):
                item['label'] = labels[index - 1]

        return result
