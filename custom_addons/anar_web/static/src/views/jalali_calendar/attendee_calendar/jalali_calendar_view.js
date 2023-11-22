/** @odoo-module */


import { registry } from "@web/core/registry";
import { attendeeCalendarView } from "@calendar/views/attendee_calendar/attendee_calendar_view";
import { JalaliCalenderRenderer } from "./jalali_calendar_renderer";


export const jalaliCalendarView = {
    ...attendeeCalendarView,
    Renderer: JalaliCalenderRenderer,
};

registry.category("views").remove("attendee_calendar");
registry.category("views").add("attendee_calendar", jalaliCalendarView);