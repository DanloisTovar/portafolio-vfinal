module.exports = {
  src_folders: ['tests/e2e'],
  page_objects_path: ['tests/e2e/page-objects'],
  custom_commands_path: ['tests/e2e/custom-commands'],

  webdriver: {
    start_process: true,
    server_path: '',
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:4321',
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },

    chrome: {
      webdriver: {
        port: 9515,
        server_path: require('chromedriver').path,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
        },
      },
    },

    firefox: {
      webdriver: {
        port: 4444,
        server_path: require('geckodriver').path,
      },
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['-headless'],
        },
      },
    },

    docker: {
      selenium: {
        start_process: false,
        host: 'selenium',
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
