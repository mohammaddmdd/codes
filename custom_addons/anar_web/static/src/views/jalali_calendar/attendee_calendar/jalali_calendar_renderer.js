/** @odoo-module */


import { AttendeeCalendarRenderer } from "@calendar/views/attendee_calendar/attendee_calendar_renderer";
import {JalaliCalendarCommonRenderer} from "./common/jalali_calendar_common_renderer";


export class JalaliCalenderRenderer extends AttendeeCalendarRenderer {

}


JalaliCalenderRenderer.components = {
    ...AttendeeCalendarRenderer.components,
    day: JalaliCalendarCommonRenderer,
    week: JalaliCalendarCommonRenderer,
}
