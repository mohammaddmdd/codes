/** @odoo-module **/


import { Component, onMounted, useState, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class ThemeToggle extends Component {

    setup() {
        super.setup();

        this.input = useRef('input')
        this.darkTheme = useState({ value: this.getThemeMode() })

        onMounted(() => {
            this.initializeTheme()
        })
    }

    getThemeMode() {
        const darkMode = localStorage.getItem('darkMode')
        return darkMode === 'true'
    }

    initializeTheme() {
        const body = document.body

        if (!this.darkTheme.value) {
            body.classList.add('light-theme')
            this.input.el.checked = false
        }

        else {
            body.classList.add('dark-theme')
            this.input.el.checked = true
        }
    }

    // used in toggle.xml
    toggleTheme() {
        const body = document.body

        // enable dark_mode
        if (!this.darkTheme.value) {
            body.classList.replace('light-theme', 'dark-theme')
            this.darkTheme.value = true
        }

        // disable dark_mode
        else {
            body.classList.replace('dark-theme', 'light-theme')
            this.darkTheme.value = false
        }

        // update theme mode in local storage
        localStorage.setItem('darkMode', this.darkTheme.value)
    }

}

ThemeToggle.template = "anar_theme.Toggle";


export const systrayItem = {
    Component: ThemeToggle,
};
registry.category("systray").add("anar_theme.Toggle", systrayItem, { sequence: 1 });
