/** @odoo-module **/


import { patch } from "@web/core/utils/patch";
import { onWillStart } from "@odoo/owl";
import { loadJS } from "@web/core/assets";
import { MessageList } from "@mail/components/message_list/message_list";

import { moduleName as anarWebModuleName } from '@anar_web/config'


patch(MessageList.prototype, "persianMessageList", {
    setup() {
        this._super()

        onWillStart(async () => {
            await loadJS('/' + anarWebModuleName + '/static/lib/persian-date/persian-date.min.js')
        })
    },

    persianFormatDate(date) {

        // if date parameter is undefined that means the date to display should be today

        if (date) {
            return persianDate.unix(date / 1000).format('DD MMMM YYYY');
        }

        return new persianDate().format('DD MMMM YYYY');
    }
});
