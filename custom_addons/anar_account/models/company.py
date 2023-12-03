from odoo import models, fields


MONTH_SELECTION = [
    ('1', 'فروردین'),
    ('2', 'اردیبهشت'),
    ('3', 'خرداد'),
    ('4', 'تیر'),
    ('5', 'مرداد'),
    ('6', 'شهریور'),
    ('7', 'مهر'),
    ('8', 'آبان'),
    ('9', 'آذر'),
    ('10', 'دی'),
    ('11', 'بهمن'),
    ('12', 'اسفند'),
]


class ResCompany(models.Model):
    _inherit = "res.company"

    fiscalyear_last_month = fields.Selection(MONTH_SELECTION, default='12', required=True)
