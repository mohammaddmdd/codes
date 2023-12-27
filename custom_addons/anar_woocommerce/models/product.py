from odoo import models


class Product(models.AbstractModel):
    _inherit = 'product.template'

    def show_notification(self):
        # self.env.user.notify_success(message='My success message')

        notification = {
            'type': 'ir.actions.client',
            'tag': 'display_notification',
            'params': {
                'title': 'Warning',
                'type': 'warning',
                'message': 'You cannot do this action now',
                'sticky': True,
            }
        }
        return notification
