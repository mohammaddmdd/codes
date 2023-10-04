/** @odoo-module */


import {
    AttendeeCalendarCommonRenderer
} from "@calendar/views/attendee_calendar/common/attendee_calendar_common_renderer";

export class JalaliCalendarCommonRenderer extends AttendeeCalendarCommonRenderer {

    get options() {
        const options = super.options
        delete options.columnHeaderFormat
        return options
    }

}