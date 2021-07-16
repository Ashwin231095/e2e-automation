import { Before, After } from 'cucumber';
import { browser } from 'protractor';

// Default before anything else, open the app and clear previous state
Before({ timeout: 20 * 5000 }, async () => {
  await browser.manage().deleteAllCookies();
  await browser.get(browser.baseUrl);
});

// Note: The After hooks are run in reverse order that they are defined in
// If the scenario failed, include a screenshot of the last step.
After({ timeout: 100 * 1000 }, function(testCase) {
  const world = this;
  if (testCase.result.status !== 'passed' || true) {
    return browser.takeScreenshot().then((screenShot) => {
      world.attach(screenShot, 'image/png'); // screenShot is a base-64 encoded PNG
    });
  }
});
