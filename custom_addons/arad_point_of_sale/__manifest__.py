{
    "name": "Arad Point of Sale",
    'version': '1.0',
    'author': 'Arad Pergas Co',
    'website': 'https://aradware.ir',
    "license": "LGPL-3",
    'summary': 'Arad Point of Sale custom module',
    "description": 'Customization for Point of Sale module',
    "depends": ['point_of_sale'],
    'category': 'Sales/Point of Sale',
    'sequence': 2,
    'installable': True,
    'application': True,

    'data': [
        'report/persian_report_saledetails.xml',
    ]
}
