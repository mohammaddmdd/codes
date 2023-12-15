from odoo import models, _
from odoo.addons.base.models.ir_ui_view import View


class AnarAnitaViewExtend(models.AbstractModel):

    _inherit = 'ir.ui.view'

    def _render_template(self, template, values=None):

        values['title'] = 'نرم افزار مدیریت کسب و کار انار'
        return View._render_template(self, template, values)
