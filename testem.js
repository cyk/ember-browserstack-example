/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  browser_start_timeout: 600,
  launch_in_ci: [
    'BS_Edge',
    'BS_Firefox',
    'BS_IE',
    'BS_Safari'
  ],
  launch_in_dev: [
    'PhantomJS',
    'Chrome'
  ],
  launchers: {
    'BS_Edge': {
      'exe': '.travis/browserstack.js',
      'args': ['WINDOWS', '10', 'Edge', 'latest', ''],
      'protocol': 'browser'
    },
    'BS_Firefox': {
      'exe': '.travis/browserstack.js',
      'args': ['WINDOWS', '10', 'Firefox', 'latest', ''],
      'protocol': 'browser'
    },
    'BS_IE': {
      'exe': '.travis/browserstack.js',
      'args': ['WINDOWS', '10', 'IE', 'latest', ''],
      'protocol': 'browser'
    },
    'BS_Safari': {
      'exe': '.travis/browserstack.js',
      'args': ['OS X', 'Sierra', 'Safari', 'latest', ''],
      'protocol': 'browser'
    }
  },

  browser_args: {
    'Chrome': [
      '--headless',
      '--incognito',
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ]
  }
};
