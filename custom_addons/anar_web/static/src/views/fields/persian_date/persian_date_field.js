/** @odoo-module */


import { registry } from "@web/core/registry";
import { areDateEquals } from "@web/core/l10n/dates";
import { loadJS } from "@web/core/assets";
import { onWillStart } from "@odoo/owl";
import { DateField } from "@web/views/fields/date/date_field";

import { PersianDatePicker } from "../../../core/datepicker/persian_datepicker";
import { moduleName } from "../../../config";


export class PersianDateField extends DateField {

    setup() {
        super.setup()

        onWillStart(async () => {
            // Persian Date Library
            await loadJS('/' + moduleName + '/static/lib/persian-date/persian-date.min.js')
        })
    }

    onDateTimeChanged(date) {
        if (!areDateEquals(this.props.value || "", date)) {
            this.props.update(date);
        }
    }

    get formattedValue() {
        if (this.props.value.ts) {
            return persianDate.unix(this.props.value.ts / 1000).format('YYYY/MM/DD');
        }
        else {
            return ''
        }
    }

}

PersianDateField.template = moduleName + '.PersianDateField'
PersianDateField.components = {
    PersianDatePicker
}
PersianDateField.props = {
    ...DateField.props
}


registry.category("fields").remove("date")
registry.category("fields").add("date", PersianDateField)