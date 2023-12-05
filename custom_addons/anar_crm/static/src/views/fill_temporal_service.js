/** @odoo-module **/

import { patch } from "@web/core/utils/patch";

import { FillTemporalPeriod } from "@crm/views/fill_temporal_service";


patch(FillTemporalPeriod.prototype, "fixFillTemporalPeriod", {

    _getFormattedServerDate(bound) {
        let result = this._super(bound)
        result = moment(result).locale('en')
        result = result.format(result._f)
        return result
    }

})