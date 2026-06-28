module.exports = {
  'Homepage loads correctly': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .assert.titleContains('Danlois Tovar')
      .assert.visible('main')
      .verify.visible('#home') // Hero
      .verify.visible('#sobre-mi') // About
      .verify.visible('#skills') // Skills
      .verify.visible('#experiencia') // Experience
      .verify.visible('#projects') // Projects (clean code)
      .verify.visible('#case-study') // Case Study
      .verify.visible('#wordpress-projects') // WordPress Projects
      .verify.visible('#qa-showcase') // QA Showcase
      .verify.visible('#news') // News
      .verify.visible('#contact') // Contact
      .end();
  },
};
