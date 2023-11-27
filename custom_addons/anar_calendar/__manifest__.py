{
    "name": "Anar Calendar",
    'version': '1',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Anar Calendar custom module',
    "description": 'Customization for Calendar module',
    "depends": ['calendar'],
    'category': 'Productivity/Calendar',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Views
            'anar_calendar/static/src/views/**/*',

        ],
    },
}
