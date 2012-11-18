#!bin/python

###############################################################################
###############################################################################

from setuptools import setup

###############################################################################
###############################################################################

setup (
    name='webed',
    version='0.1',
    description='Browser based text editor',
    author='Hasan Karahan',
    author_email='hasan.karahan81@gmail.com',
    packages=['webed'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'Flask',
        'Flask-SQLAlchemy',
        'Flask-Admin',
        'Flask-DebugToolbar',
        'ipython',
    ]
)

###############################################################################
###############################################################################
