{
    "name": "Anar CRM",
    'version': '1.0.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Anar CRM custom module',
    "description": 'Customization for CRM module',
    "depends": ['crm'],
    'category': 'Productivity/Discuss',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Views
            'anar_crm/static/src/views/**/*',

        ],
    },
}
