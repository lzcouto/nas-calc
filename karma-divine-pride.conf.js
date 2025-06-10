// Karma configuration for Divine Pride service tests only
const defaultConfig = require('./karma.conf.js');

module.exports = function (config) {
  // Start with default configuration
  defaultConfig(config);

  // Override specific settings for Divine Pride tests
  config.set({
    // Only run files matching the Divine Pride service test
    files: [
      // Include Angular polyfills and testing setup
      'src/test.ts',
    ],
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap']
    },
    // Override the file pattern to only include Divine Pride tests
    client: {
      jasmine: {
        grep: 'DivinePrideService', // Only run tests containing 'DivinePrideService'
        invertGrep: false
      },
      clearContext: false
    },
    // Run in single run mode by default for CI/CD
    singleRun: true,
    // Use headless Chrome for automated testing
    browsers: ['ChromeHeadless'],
    // Set longer timeout for API calls
    browserNoActivityTimeout: 60000,
    // Console output
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--headless'
        ]
      }
    }
  });
}; 