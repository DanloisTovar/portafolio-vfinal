module.exports = {
  'SEO Meta Tags (ES)': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementPresent('title')
      .assert.titleContains('Danlois Tovar')
      .assert.elementPresent('meta[name="description"]')
      .execute(
        function () {
          return document.querySelector('meta[name="description"]').getAttribute('content');
        },
        [],
        function (result) {
          this.assert.ok(result.value.length > 50, 'Description is descriptive enough');
        }
      );
  },

  'SEO Meta Tags (EN)': function (browser) {
    browser
      .url(browser.launchUrl + 'en')
      .waitForElementPresent('title')
      .assert.titleContains('Danlois Tovar')
      .assert.elementPresent('meta[name="description"]')
      .end();
  },
};
