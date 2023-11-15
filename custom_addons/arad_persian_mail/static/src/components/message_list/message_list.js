/** @odoo-module **/


const { onWillStart } = owl;

import { patch } from "@web/core/utils/patch";
import { loadJS } from "@web/core/assets";
import { MessageList } from "@mail/components/message_list/message_list";


patch(MessageList.prototype, "persianMessageList", {
    setup() {
        this._super()

        onWillStart(async () => {
            await loadJS('/arad_jalali_toolkit/static/lib/persian-date/persian-date.min.js')
        })
    },

    persianFormatDate(date) {
        console.log(date)
        return persianDate.unix(date / 1000).format('DD MMMM YYYY');
    }
});
