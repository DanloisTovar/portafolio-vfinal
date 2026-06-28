module.exports = {
  'Case Study section loads': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#case-study')
      .verify.visible('#case-study')
      .verify.visible('#case-study-gallery')
      .end();
  },

  'Case Study has before/after images in DOM': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#case-study')
      .waitForElementPresent('#case-study .case-study-item')
      .end();
  },

  'QA Showcase section loads': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#qa-showcase')
      .verify.visible('#qa-showcase')
      .end();
  },

  'QA Showcase has bug hunting cards in DOM': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#qa-showcase')
      .waitForElementPresent('#qa-showcase .qa-showcase-item')
      .end();
  },

  'Case Study description card exists': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#case-study')
      .assert.textContains('#case-study', 'Refactorización')
      .end();
  },
};
