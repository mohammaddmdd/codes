/** @odoo-module */


import { patch } from "@web/core/utils/patch";

import {
    AttendeeCalendarCommonRenderer
} from "@calendar/views/attendee_calendar/common/attendee_calendar_common_renderer";


patch(AttendeeCalendarCommonRenderer.prototype, "jalaliAttendeeCalendarCommonRenderer", {

    get options() {
        const options = this._super()
        delete options.columnHeaderFormat
        return options
    }

});
