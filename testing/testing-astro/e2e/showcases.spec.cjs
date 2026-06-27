module.exports = {
  'Case Study section loads': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#case-study')
      .verify.visible('#case-study')
      .verify.visible('#case-study-gallery')
      .end();
  },

  'Case Study has before/after images': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#case-study')
      .verify.visible('#case-study .case-study-item')
      .end();
  },

  'QA Showcase section loads': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#qa-showcase')
      .verify.visible('#qa-showcase')
      .end();
  },

  'QA Showcase has bug hunting cards': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#qa-showcase')
      .verify.visible('#qa-showcase .qa-showcase-item')
      .end();
  },

  'Case Study description card exists': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#case-study')
      .verify.containsText('#case-study', 'Refactorización')
      .end();
  },
};
