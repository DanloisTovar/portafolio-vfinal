/* eslint-disable */
module.exports = {
  src_folders: ['testing/testing-docker/e2e'],
  page_objects_path: [],
  custom_commands_path: [],

  webdriver: {
    start_process: true,
    server_path: require('path').resolve(__dirname, 'bin/chromedriver'),
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3001',
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },

    chrome: {
      webdriver: {
        start_process: true,
        server_path: require('path').resolve(__dirname, 'bin/chromedriver'),
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [],
        },
      },
    },

    firefox: {
      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
      },
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [],
        },
      },
    },
  },
};
