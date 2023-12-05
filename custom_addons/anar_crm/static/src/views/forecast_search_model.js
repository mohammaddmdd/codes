/** @odoo-module **/

import { patch } from "@web/core/utils/patch";

import { ForecastSearchModel } from "@crm/views/forecast_search_model";


patch(ForecastSearchModel.prototype, "fixForecastSearchModel", {

    _getForecastStart(forecastField) {
        let result = this._super(forecastField)
        result = moment(result).locale('en').format(this._super.format)
        return result
    }

});
