var seleniumServer = require('selenium-server') // eslint-disable-line
var chromedriver = require('chromedriver') // eslint-disable-line
var path = require('path')

module.exports = {
    'src_folders': ['test'],
    'output_folder': 'reports',
    'page_objects_path': 'page',

    'selenium': {
        'start_process': true,
        'server_path': seleniumServer.path,
        'host': '127.0.0.1',
        'port': 4444,
        'cli_args': {
            'webdriver.chrome.driver': chromedriver.path,
        },
    },

    'test_settings': {
        'default': {
            'selenium_port': 4444,
            'selenium_host': 'localhost',
            'silent': true,
            'use_xpath': true,
            'end_session_on_fail': true,
            'skip_testcases_on_fail': false,
            'screenshots': {
                'enabled': true,
                'path': './reports/screenshot'
            },
        },
        'chrome': {
            'desiredCapabilities': {
                'browserName': 'chrome',
                'javascriptEnabled': true,
                'acceptSslCerts': true,
            },
        },

        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            },
        },
        "phantomjs": {
            "desiredCapabilities": {
                "browserName": "phantomjs",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "phantomjs.binary.path": "D:\\workspace\\phantomjs\\phantomjs.exe"

            },
        }
    }
}