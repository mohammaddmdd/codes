/** @odoo-module **/

import { patch } from "@web/core/utils/patch";

import { AttendeeCalendarController } from "@calendar/views/attendee_calendar/attendee_calendar_controller";


patch(AttendeeCalendarController.prototype, "jalaliAttendeeCalendarController", {

    // use in XML
    showHideSidebar() {
        this.state.showSideBar = !this.state.showSideBar
    }

});
