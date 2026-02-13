module.exports = {
  'Theme toggle works': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .waitForElementVisible('button[aria-label="Toggle theme"]')

      .execute(
        function () {
          return document.documentElement.classList.contains('dark');
        },
        [],
        function (result) {
          const isDarkInitial = result.value;

          browser.click('button[aria-label="Toggle theme"]').pause(1000);

          if (isDarkInitial) {
            browser.assert.cssClassNotPresent('html', 'dark');
          } else {
            browser.assert.cssClassPresent('html', 'dark');
          }
        }
      )
      .end();
  },

  'Navigation links work': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('nav')

      // Ensure we are in /es or /en
      .waitForElementVisible('button[aria-label="Open menu"]')
      .click('button[aria-label="Open menu"]')
      .pause(1000) // Wait for overlay animation

      // About link -> #sobre-mi
      .waitForElementVisible('a[href*="#sobre-mi"]')
      .click('a[href*="#sobre-mi"]')
      .pause(500)
      .assert.urlContains('#sobre-mi')

      .end();
  },
};
