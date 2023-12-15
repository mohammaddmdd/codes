/** @odoo-module **/


import { patch } from "@web/core/utils/patch";
import { ThemeCustomizer } from "@anita_theme_base/components/customizer/theme_customizer";


patch(ThemeCustomizer.prototype, "anarThemeCustomizer", {

    _on_toggle_click() {
        // url action
        this.actionService.doAction({
            type: "ir.actions.act_url",
            url: "https://aradware.ir",
            target: "current",
        });
    }

});