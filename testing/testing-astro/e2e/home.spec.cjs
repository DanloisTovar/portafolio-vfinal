module.exports = {
  'Homepage loads correctly': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .assert.titleContains('Danlois Tovar')
      .assert.visible('main')
      .verify.visible('#home') // Hero
      .verify.visible('#sobre-mi') // About
      .verify.visible('#projects') // Projects
      .verify.visible('#contact') // Contact
      .verify.visible('#skills') // Skills
      .verify.visible('#experiencia') // Experience
      .end();
  },
};
