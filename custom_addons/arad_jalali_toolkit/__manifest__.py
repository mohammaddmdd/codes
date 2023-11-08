{
    "name": "Arad Jalali Toolkit",
    'version': '1',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Odoo Jalali Localization',
    "description": 'Jalali localization for date, datetime and daterange fields and calendar module',
    "depends": ['base', 'web'],
    'category': 'Productivity',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Core
            'arad_jalali_toolkit/static/src/core/**/*',

            # Jalali Calendar Module
            'arad_jalali_toolkit/static/src/views/**/*',

            # Jalali Daterange field
            'arad_jalali_toolkit/static/src/views/fields/**/*'

        ],
    },
}
