from odoo import _
from odoo.http import request
from ..conf import WOOCOMMERCE_NOTIFICATION_TIMEOUT


class Notification:

    def __init__(self, title, message, type, sticky):

        self.title = title
        self.message = message
        self.type = type
        self.sticky = sticky

        if not self.sticky:
            self.timeout = WOOCOMMERCE_NOTIFICATION_TIMEOUT

    def send_to_bus(self, channel_name):
        request.env['bus.bus']._sendone(channel=channel_name,
                                        message=self.__dict__,
                                        notification_type='woocommerce_notification')
