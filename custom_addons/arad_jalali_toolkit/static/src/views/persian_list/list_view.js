/** @odoo-module */


import { registry } from "@web/core/registry";
import { listView } from "@web/views/list/list_view";

import { PersianListRenderer } from "./list_renderer";


export const persianListView = {
    ...listView,
    Renderer: PersianListRenderer,
}


// remove default list view
registry.category("views").remove("list");

// for all default tree tags that have not js_class attribute
registry.category("views").add("list", persianListView);

// for all tree tags that have their specific js_class attribute
registry.category("views").remove("hr_contract_history_list");
registry.category("views").add("hr_contract_history_list", persianListView);
