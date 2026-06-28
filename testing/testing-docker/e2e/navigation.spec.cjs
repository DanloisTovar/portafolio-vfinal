module.exports = {
  'Language Switching persistence': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('html[lang="es"]')
      .click('button[aria-label="Change language"]')
      .waitForElementVisible('html[lang="en"]')
      .refresh()
      .waitForElementVisible('html[lang="en"]')
      .assert.urlContains('/en');
  },

  'Navbar Smooth Scrolling': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('nav')
      .execute(function () {
        const btn = document.querySelector('button[aria-label="Open menu"]');
        if (btn && window.getComputedStyle(btn).display !== 'none') {
          btn.click();
        }
      })
      .waitForElementVisible('a[href*="#projects"]')
      .execute(function () {
        document.querySelector('a[href*="#projects"]').click();
      })
      .pause(1000)
      .execute(
        function () {
          return window.scrollY;
        },
        [],
        function (result) {
          this.assert.ok(result.value > 0, 'Page scrolled down to projects');
        }
      );
  },

  'Social links correctness': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('footer')
      .execute(function () {
        window.scrollTo(0, document.body.scrollHeight);
      })
      .waitForElementVisible('footer a[href*="github.com"]')
      .assert.attributeEquals('footer a[href*="github.com"]', 'target', '_blank')
      .assert.attributeContains('footer a[href*="github.com"]', 'rel', 'noopener')
      .end();
  },
};
