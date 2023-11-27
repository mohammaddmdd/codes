/** @odoo-module **/


import { PropertyValue } from "@web/views/fields/properties/property_value";

import { PersianDatePicker, PersianDateTimePicker } from "../../../core/datepicker/persian_datepicker";

delete PropertyValue.components.DateTimePicker
delete PropertyValue.components.DatePicker

PropertyValue.components.PersianDateTimePicker = PersianDateTimePicker
PropertyValue.components.PersianDatePicker = PersianDatePicker
