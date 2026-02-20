/* eslint-disable */
module.exports = {
  src_folders: ['testing/testing-docker/e2e'],
  page_objects_path: [],
  custom_commands_path: [],

  webdriver: {},

  test_settings: {
    default: {
      launch_url: 'http://localhost:3001/',
      desiredCapabilities: {
        browserName: 'chrome',
      },
      webdriver: {
        start_process: true,
        server_path: '',
      },
    },

    chrome: {
      webdriver: {
        start_process: true,
        server_path: require('path').resolve(__dirname, 'bin/chromedriver'),
        port: 9515,
        host: 'localhost',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--remote-debugging-port=9222',
          ],
        },
      },
    },

    firefox: {
      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        port: 4444,
        host: 'localhost',
        cli_args: [
          // very important: do not specify --port here
        ],
      },
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [],
          },
        },
      },
    },
  },
};
