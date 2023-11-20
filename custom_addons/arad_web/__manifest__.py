{
    "name": "Arad Web",
    'version': '1',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Arad Web custom module',
    "description": 'Customization for Web module',
    "depends": ['web'],
    'category': 'Productivity',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Core
            'arad_web/static/src/core/**/*',

            # Jalali Calendar Module
            'arad_web/static/src/views/**/*',

            # Jalali Daterange field
            'arad_web/static/src/views/fields/**/*'

        ],
    },
}
