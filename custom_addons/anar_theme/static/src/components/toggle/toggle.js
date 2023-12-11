/** @odoo-module **/


import { Component, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class ThemeToggle extends Component {

    setup() {
        super.setup();

        onMounted(() => {
            document.body.classList.add('white-theme')
        })
    }

    // used in toggle.xml
    toggleTheme() {
        const body = document.body

        if (body.classList.contains('white-theme'))
            body.classList.replace('white-theme', 'dark-theme')

        else if (body.classList.contains('dark-theme'))
            body.classList.replace('dark-theme', 'white-theme')
    }

}

ThemeToggle.template = "anar_theme.Toggle";


export const systrayItem = {
    Component: ThemeToggle,
};
registry.category("systray").add("anar_theme.Toggle", systrayItem, { sequence: 1 });
