{
    'name': "Anar Woocommerce",

    'summary': """Anar Woocommerce""",

    'description': """Customization for pragtech_woo_commerce module""",

    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    'version': '0.1',
    "license": "LGPL-3",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Services',

    # any module necessary for this one to work correctly
    'depends': ['base', 'pragtech_woo_commerce'],

    'sequence': 1,
    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [

            # Config file
            'anar_woocommerce/static/src/config.js',

            # Notifications
            'anar_woocommerce/static/src/js/notifications.js'

        ]
    }

}
