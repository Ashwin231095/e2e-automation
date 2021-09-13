// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
/**
 * @type { import("protractor").Config }
 */

  var runner = require(process.cwd() + '/e2e/utils/testRunner.ts');

  module.exports.config = {
  /* debug: false (default). If you see a starting test with open browsers
  * and no test is excuted, set debug: true, maxinstances: 1 and
  * shardTestFiles: false. Console should now show debug information
  * with the actual reason why the test code is failing to run*/
  // setup: runner.setUp(),
  debug: false,
  allScriptsTimeout: 45000,
  getPageTimeout: 30000,
  // specs: [
  //   'features/pre-prod/'+ runner.setUp() +'.feature'
  // ],
  specs: runner.setUp().map((spec) => `features/pre-prod/${spec}.feature`),
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 3,
    chromeOptions: {
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--incognito',
        '--ignore-certificate-errors',
        '--allow-insecure-localhost',
        '--start-fullscreen'
      ]
    },
  },
  directConnect: true,
  baseUrl: 'http://pre.portaildigital.ram.aws.renault.com/login',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './**/*.ts',
      './**/*.js'
    ],
    // format: [
    //   'json:e2e/test-reports/json/cucumber-test-results.json'
    // ],
    // @ts-ignore
    // tags: false
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      reportPath: 'e2e/test-reports/html',
      reportName: 'Re7 e2e results',
      customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'RParts Automation'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'XXXXXXXXXXX'},
        ]
    }
    }
  }],
  onPrepare() {
    // Register to compile typescript files when protractor starts running
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};
