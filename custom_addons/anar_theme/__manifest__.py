{
    'name': "Anar Theme",
    'version': '1.0.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    'license': 'LGPL-3',
    'summary': 'Anar Theme for Odoo ERP',
    'description': 'Customization for anita_theme_base & mnk_theme module',
    'depends': ['base', 'mnk_theme'],
    'category': 'Themes/Backend',
    'sequence': 1,
    'installable': True,
    'application': True,

    'data': [
        "views/login_style1.xml",
    ],

    'assets': {
        'web.assets_backend': [

            # Components
            'anar_theme/static/src/components/**/*',

            # Styles
            # Dark mode
            'anar_theme/static/src/scss/dark_mode.scss',
            # For fixing overlaps with other styles
            'anar_theme/static/src/scss/fix.scss',

        ],

        'web.assets_frontend': [

            # Login page
            'anar_theme/static/css/login/style1/login.css'

        ]
    }
}
