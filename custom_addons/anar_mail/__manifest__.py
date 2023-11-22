{
    "name": "Anar Mail",
    'version': '1.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Anar Mail custom module',
    "description": 'Customization for Mail module',
    "depends": ['mail'],
    'category': 'Productivity/Discuss',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Components
            'anar_mail/static/src/components/**/*',

        ],
    },
}
