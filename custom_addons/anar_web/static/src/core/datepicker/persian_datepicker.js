/** @odoo-module **/


import { DatePicker } from "@web/core/datepicker/datepicker";
import { onMounted, onWillStart, useRef, useState } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

import { moduleName } from "../../config";


export class PersianDatePicker extends DatePicker {

    setup() {
        this.inputRef = useRef('input')

        this.options = useState({
            value: this.props.date ? this.props.date.toJSDate() : null,
            calendar: null,
            locale: null,
            format: "YYYY/MM/DD",
            monthYearSeparator: '/',
            weekDays: null,
            calendarPosition: 'auto'
        })

        onWillStart(async () => {
            await this.loadJSFiles()
        })

        onMounted(() => {
            // import persian calendar and locale
            const persian = PersianCalendar
            const persian_fa = PersianFa

            this.options.calendar = persian
            this.options.locale = persian_fa

            this.renderDatePicker()

            // remove border style of input field in div tag that generated with React-Multi-DatePicker library
            // should be executed after rendering, otherwise, the children property is undefined
            this.inputRef.el.children[0].children[0].style.border = 'none'

            // this style prevents Ract-Multi-DatePicker from getting the scroll in inline edit mode
            const elementDisableOverflowX = document.getElementsByClassName('o_list_renderer o_renderer table-responsive')[0]
            // to avoid null and undefined errors
            if (elementDisableOverflowX) {
                elementDisableOverflowX.style.overflowX = 'visible'
            }

            // this style prevents Ract-Multi-DatePicker from getting the scroll in filter menu
            const disableOverflow = document.getElementsByClassName('o-dropdown--menu dropdown-menu d-block')[1]
            // to avoid null and undefined errors
            if (disableOverflow) {
                disableOverflow.style.overflow = 'visible'
            }

            // this style prevents Ract-Multi-DatePicker from getting the scroll invoicing module in configure modal menu
            const disableModalOverflow = document.getElementsByClassName('modal-body p-0 o_act_window')[0]
            if (disableModalOverflow) {
                disableModalOverflow.style.overflow = 'visible'
            }
        })
    }

    onInputChange(value) {
        // because odoo accepts only Luxon DateTime format,
        // the output datetime from React-Multi-Datepicker library should be converted to luxon datetime format
        // for this purpose, first it should be converted to default JS datetime format (usnig toDate function)
        // then the JS datetime could be converted to Luxon datetime format (using formJSDate function)

        if (value !== null) {  // if input is not null
            const luxonDatetime = luxon.DateTime.fromJSDate(value.toDate())
            this.props.onDateTimeChanged(luxonDatetime)  // save to database
            this.props.date = luxonDatetime  // refresh UI
        }

        else {
            this.props.onDateTimeChanged(null)  // if value is empty then save null in database
        }
    }

    handlePropsChange(newProps) {
        this.options = newProps
        this.renderDatePicker()
    }

    renderDatePicker() {
        const { DatePicker } = ReactMultiDatePicker;

        ReactDOM.render(
            React.createElement(DatePicker, {
                ...this.options,
                onChange: this.onInputChange.bind(this),
                onPropsChange: this.handlePropsChange.bind(this),
                plugins: [
                    React.createElement(Settings, {
                        position: 'bottom',
                        calendars: ["gregorian", "persian"],
                        locales: ["en", "fa"],
                        disabledList: ['mode', 'other']
                    }),
                    HighlightWeekends()
                ],
            }),
            this.inputRef.el
        );
    }

    async loadJSFiles() {
        const jsFiles = [
            // React
            '/' + moduleName + '/static/lib/react-multi-datepicker/react/react.production.min.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/react/react-dom.production.min.js',

            // Datepicker & Dependencies
            '/' + moduleName + '/static/lib/react-multi-datepicker/date-object.min.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/react-element-popper-browser.min.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/react-multi-date-picker-browser.min.js',

            // Plugins
            '/' + moduleName + '/static/lib/react-multi-datepicker/plugins/analog_time_picker.browser.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/plugins/highlight_weekends.browser.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/plugins/settings.browser.js',

            // Persian & Locale
            '/' + moduleName + '/static/lib/react-multi-datepicker/calendars/2.1.8_calendars_persian.js',
            '/' + moduleName + '/static/lib/react-multi-datepicker/locales/2.1.8_locales_persian_fa.js',

            // Persian Date Library
            '/' + moduleName + '/static/lib/persian-date/persian-date.min.js'
        ]

        for (const jsFile of jsFiles) {
            await loadJS(jsFile)
        }
    }
}


PersianDatePicker.template = moduleName + '.PersianDatePicker'
PersianDatePicker.props = {
    ...DatePicker.props
}


export class PersianDateTimePicker extends PersianDatePicker {

    setup() {

        super.setup()
        this.options.format = "YYYY/MM/DD HH:mm"

    }

    renderDatePicker() {
        const { DatePicker } = ReactMultiDatePicker;

        ReactDOM.render(
            React.createElement(DatePicker, {
                ...this.options,
                onChange: this.onInputChange.bind(this),
                onPropsChange: this.handlePropsChange.bind(this),
                plugins: [
                    React.createElement(AnalogTimePicker, {
                        hideSeconds: true
                    }),
                    React.createElement(Settings, {
                        position: 'bottom',
                        calendars: ["gregorian", "persian"],
                        locales: ["en", "fa"],
                        disabledList: ['mode', 'other']
                    }),
                    HighlightWeekends()
                ],
            }),
            this.inputRef.el
        );
    }

}
