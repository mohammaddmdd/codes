{
    "name": "Arad Persian Mail",
    'version': '1.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Odoo Jalali Localization',
    "description": 'Jalali localization for mail module',
    "depends": ['mail'],
    'category': 'Productivity/Discuss',
    'sequence': 2,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Components
            'arad_persian_mail/static/src/components/**/*',

        ],
    },
}
