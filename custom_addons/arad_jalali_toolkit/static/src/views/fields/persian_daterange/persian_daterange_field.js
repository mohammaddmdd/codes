/** @odoo-module */


import { DateRangeField } from "@web/views/fields/daterange/daterange_field";
import { loadCSS, loadJS } from "@web/core/assets";
import { luxonToMoment } from "@web/core/l10n/dates";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { onWillStart, useExternalListener, useRef, useEffect } from "@odoo/owl";

export class PersianDateRangeField extends DateRangeField {fonts

    setup() {
        this.notification = useService("notification");
        this.root = useRef("root");
        this.isPickerShown = false;
        this.pickerContainer;

        useExternalListener(window, "scroll", this.onWindowScroll, { capture: true });

        onWillStart(async () => {
            await loadJS("/arad_jalali_toolkit/static/lib/jalali_moment/jalali-moment.browser.js")
            await loadJS('/arad_jalali_toolkit/static/lib/persian-daterangepicker-1.0.0/dateragepicker.js')
            await loadCSS('/arad_jalali_toolkit/static/lib/persian-daterangepicker-1.0.0/dateragepicker.css')

            await loadJS('/arad_jalali_toolkit/static/lib/persian-date/persian-date.min.js')
        })

        useEffect(
            (el) => {
                if (el) {
                    window.$(el).daterangepicker(this.options);
                    this.pickerContainer = window.$(el).data("daterangepicker").container[0];

                    window.$(el).on("apply.daterangepicker", this.onPickerApply.bind(this));
                    window.$(el).on("show.daterangepicker", this.onPickerShow.bind(this));
                    window.$(el).on("hide.daterangepicker", this.onPickerHide.bind(this));

                    this.pickerContainer.dataset.name = this.props.name;
                }

                return () => {
                    if (el) {
                        this.pickerContainer.remove();
                    }
                };
            },
            () => [this.root.el, this.props.value]
        );

    }

    get options() {
        return {

            // Default Options
            timePicker: this.isDateTime,
            timePicker24Hour: true,
            timePickerIncrement: 5,
            autoUpdateInput: false,
            startDate: this.startDate ? luxonToMoment(this.startDate) : window.moment(),
            endDate: this.endDate ? luxonToMoment(this.endDate) : window.moment(),
            drops: "auto",

            // Custom Options
            persian: {
                enable: true,
                persianDigits: true,
            },
            locale: {
                direction: 'rtl',
                firstDay: 0,
                format: 'jYYYY-jMM-jDD',
                applyLabel: this.env._t("Apply"),
                cancelLabel: this.env._t("Cancel"),
                monthNames: [
                    "فروردین",
                    "اردیبهشت",
                    "خرداد",
                    "تیر",
                    "مرداد",
                    "شهریور",
                    "مهر",
                    "آبان",
                    "آذر",
                    "دی",
                    "بهمن",
                    "اسفند"
                ],
                daysOfWeek: [
                    'ش',
                    'ی',
                    'د',
                    'س',
                    'چ',
                    'پ',
                    'ج',
                ],
            },
        }
    }

    // Display the Jalali date instead of the English date
    get formattedValue() {
        if (this.props.value.ts) {
            return new persianDate.unix(this.props.value.ts / 1000).format('YYYY/MM/D HH:mm:ss');
        }
        return ''
    }

}

registry.category("fields").remove("daterange")
registry.category("fields").add("daterange", PersianDateRangeField)