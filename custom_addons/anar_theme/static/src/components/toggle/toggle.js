/** @odoo-module **/


import { Component, onMounted, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class ThemeToggle extends Component {

    setup() {
        super.setup();

        this.dark_mode = useState({ value: false })

        onMounted(() => {
            document.body.classList.add('light-theme')
        })
    }

    // used in toggle.xml
    toggleTheme() {
        const body = document.body

        // enable dark_mode
        if (!this.dark_mode.value) {
            body.classList.replace('light-theme', 'dark-theme')
            this.dark_mode.value = true
        }

        // disable dark_mode
        else {
            body.classList.replace('dark-theme', 'light-theme')
            this.dark_mode.value = false
        }

    }

}

ThemeToggle.template = "anar_theme.Toggle";


export const systrayItem = {
    Component: ThemeToggle,
};
registry.category("systray").add("anar_theme.Toggle", systrayItem, { sequence: 1 });
