{
    "name": "Jalali Calendar",
    'version': '1',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Odoo Jalali Localization',
    "description": 'Jalali localization for date, datetime and daterange fields and calendar module',
    "depends": ['base', 'web', 'calendar'],
    'category': 'Productivity',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Jalali Date and Datetime
            'arad_jalali_toolkit/static/src/lib/**/*',
            'arad_jalali_toolkit/static/src/components/persianDatepicker/**/*',
            'arad_jalali_toolkit/static/src/components/persianDateField/**/*',
            'arad_jalali_toolkit/static/src/components/persianDateTimeField/**/*',

            # Jalali Calendar Module
            'arad_jalali_toolkit/static/src/views/**/*',
        ],
    },
}
