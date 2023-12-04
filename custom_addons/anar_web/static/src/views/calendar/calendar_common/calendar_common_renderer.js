/** @odoo-module */


import { patch } from "@web/core/utils/patch";

import {
    CalendarCommonRenderer
} from "@web/views/calendar/calendar_common/calendar_common_renderer";


patch(CalendarCommonRenderer.prototype, "jalaliCalendarCommonRenderer", {

    get options() {
        const options = this._super()
        delete options.columnHeaderFormat
        return options
    }

});
