import random
from datetime import date

import jdatetime
from dateutil.relativedelta import relativedelta

from odoo import models, fields, _
from odoo.release import version


class CrmTeam(models.AbstractModel):
    _inherit = ['crm.team']

    # copying the whole code from the parent only for overwriting the inner function "get_week_name"
    def _get_dashboard_graph_data(self):
        def get_week_name(start_date, locale):
            """ Generates a week name (string) from a datetime according to the locale:

                only works with "fa_IR" locale for now

                E.g.: locale    start_date (datetime)      return string
                      "en_US"      November 16th           "16-22 Nov"
                      "en_US"      December 28th           "28 Dec-3 Jan"

                      "fa_IR"      November 22th            "۱−۴ آذر"
                      "fa_IR"      December 20th            "آذر ۲۹ - ۵ دی"
            """

            start_date = jdatetime.date.fromgregorian(day=start_date.day,
                                                      month=start_date.month,
                                                      year=start_date.year,
                                                      locale=jdatetime.FA_LOCALE)
            next_date = start_date + jdatetime.timedelta(days=6)

            if next_date.month == start_date.month:
                short_name_from = start_date.strftime('%d')
            else:
                short_name_from = start_date.strftime('%d %B')

            short_name_to = next_date.strftime('%d %B')

            # using "\n" for better display rtl direction in the frontend
            return f'{short_name_from}\n-\n{short_name_to}'

        # TODO: handle duplication from parent
        # duplication part from parent
        self.ensure_one()
        values = []
        today = fields.Date.from_string(fields.Date.context_today(self))
        start_date, end_date = self._graph_get_dates(today)
        graph_data = self._graph_data(start_date, end_date)
        x_field = 'label'
        y_field = 'value'

        # generate all required x_fields and update the y_values where we have data for them
        locale = self._context.get('lang') or 'en_US'

        weeks_in_start_year = int(
            date(start_date.year, 12, 28).isocalendar()[1])  # This date is always in the last week of ISO years
        week_count = (end_date.isocalendar()[1] - start_date.isocalendar()[1]) % weeks_in_start_year + 1
        for week in range(week_count):
            short_name = get_week_name(start_date + relativedelta(days=7 * week), locale)
            values.append({x_field: short_name, y_field: 0, 'type': 'future' if week + 1 == week_count else 'past'})

        for data_item in graph_data:
            index = int((data_item.get('x_value') - start_date.isocalendar()[1]) % weeks_in_start_year)
            values[index][y_field] = data_item.get('y_value')

        [graph_title, graph_key] = self._graph_title_and_key()
        color = '#875A7B' if '+e' in version else '#7c7bad'

        # If no actual data available, show some sample data
        if not graph_data:
            graph_key = _('Sample data')
            for value in values:
                value['type'] = 'o_sample_data'
                # we use unrealistic values for the sample data
                value['value'] = random.randint(0, 20)
        return [{'values': values, 'area': True, 'title': graph_title, 'key': graph_key, 'color': color}]
