{
    "name": "Anar Web",
    'version': '1',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Anar Web custom module',
    "description": 'Customization for Web module',
    "depends": ['web'],
    'category': 'Productivity',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Config
            'anar_web/static/src/config.js',

            # Core
            'anar_web/static/src/core/**/*',

            # Jalali Calendar Module
            'anar_web/static/src/views/**/*',

            # Jalali Daterange field
            'anar_web/static/src/views/fields/**/*'

        ],
    },
}