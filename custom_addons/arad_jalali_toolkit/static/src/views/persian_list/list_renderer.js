/** @odoo-module **/


import { onMounted } from "@odoo/owl";
import { ListRenderer } from "@web/views/list/list_renderer";

import { PersianDateField } from "../fields/persian_date/persian_date_field";
import { PersianDateTimeField } from "../fields/persian_datetime/persian_datetime_field";


export class PersianListRenderer extends ListRenderer {
    setup() {

        super.setup()

        onMounted(() => {
            for (const column of this.state.columns) {
                if (column.FieldComponent === PersianDateField) {
                    column.widget = 'date'
                } else if (column.FieldComponent === PersianDateTimeField) {
                    column.widget = 'datetime'
                }
            }

            this.activeElement = this.uiService.activeElement;
        })

    }
}