{
    'name': "Anar Theme",
    'version': '1.0.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    'license': 'LGPL-3',
    'summary': 'Anar Theme for Odoo ERP',
    'description': 'Customization for anita_theme_base & mnk_theme module',
    'depends': ['anita_theme_base', 'mnk_theme'],
    'category': 'Themes/Backend',
    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Components
            'anar_theme/static/src/components/**/*',

            # Styles
            'anar_theme/static/src/scss/dark_mode.scss',

        ],
    }
}
