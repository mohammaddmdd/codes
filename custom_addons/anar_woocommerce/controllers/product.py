from ..conf import WOOCOMMERCE_NOTIFICATION_CHANNEL_NAME
from ..utils.notifications import Notification
from odoo import http
from odoo.http import request


class AnarWoocommerce(http.Controller):

    @http.route('/anar_woocommerce/product/create', type='json', auth='public')
    def product_create(self, **kw):

        data = request.dispatcher.jsonrequest
        product_name = data["name"]
        notification = Notification(title='اعلان ووکامرس',
                                    message=f'محصول {product_name} افزوده شد',
                                    type='info', sticky=True)

        notification.send_to_bus(channel_name=WOOCOMMERCE_NOTIFICATION_CHANNEL_NAME)

        return request.make_json_response(data={'detail': 'ok'}, status=200)
