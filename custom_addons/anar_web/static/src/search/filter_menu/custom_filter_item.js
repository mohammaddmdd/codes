/** @odoo-module **/


import { CustomFilterItem } from "@web/search/filter_menu/custom_filter_item";

import { PersianDatePicker, PersianDateTimePicker } from "../../core/datepicker/persian_datepicker";


CustomFilterItem.components.DatePicker = PersianDatePicker
CustomFilterItem.components.DateTimePicker = PersianDateTimePicker
