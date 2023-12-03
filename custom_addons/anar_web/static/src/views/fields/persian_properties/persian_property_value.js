/** @odoo-module **/


import { PropertyValue } from "@web/views/fields/properties/property_value";

import { PersianDatePicker, PersianDateTimePicker } from "../../../core/datepicker/persian_datepicker";

PropertyValue.components.DateTimePicker = PersianDateTimePicker
PropertyValue.components.DatePicker = PersianDatePicker
