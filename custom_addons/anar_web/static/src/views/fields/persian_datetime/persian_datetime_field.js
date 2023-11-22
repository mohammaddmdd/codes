/** @odoo-module */


import { registry } from "@web/core/registry";
import { areDateEquals } from "@web/core/l10n/dates";
import { loadJS } from "@web/core/assets";
import { onWillStart } from "@odoo/owl";
import { DateTimeField } from "@web/views/fields/datetime/datetime_field";

import { PersianDateTimePicker } from "../../../core/datepicker/persian_datepicker";
import { moduleName } from "../../../config";


export class PersianDateTimeField extends DateTimeField {

    setup() {
        super.setup()

        onWillStart(async () => {
            // Persian Date Library
            await loadJS('/' + moduleName + '/static/lib/persian-date/persian-date.min.js')
        })
    }

    onDateTimeChanged(date) {
        if (!areDateEquals(this.props.value.ts || "", date)) {
            this.props.update(date);
        }
    }

    get formattedValue() {
        if (this.props.value.ts) {
            return persianDate.unix(this.props.value.ts / 1000).format('YYYY/MM/DD HH:mm');
        }
        else {
            return ''
        }
    }

}

PersianDateTimeField.template = moduleName + '.PersianDateTimeField'
PersianDateTimeField.components = {
    PersianDateTimePicker
}
PersianDateTimeField.props = {
    ...DateTimeField.props
}


registry.category("fields").remove("datetime")
registry.category("fields").add("datetime", PersianDateTimeField)