/** @odoo-module **/

import { patch } from "@web/core/utils/patch";

import {CalendarController} from "@web/views/calendar/calendar_controller";


patch(CalendarController.prototype, "jalaliCalendarController", {

    // use in XML
    showHideSidebar() {
        this.state.showSideBar = !this.state.showSideBar
    }

});
