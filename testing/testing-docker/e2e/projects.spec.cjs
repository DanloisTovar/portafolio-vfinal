module.exports = {
  'EventTwo Media has featured badge': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#projects')
      .useXpath()
      .moveToElement("//div[@id='projects']", 0, 0)
      .useCss()
      .verify.visible('#projects .projects-track .group:first-child span.text-xs')
      .verify.containsText(
        '#projects .projects-track .group:first-child span.text-xs',
        'Destacado'
      )
      .end();
  },

  'EventTwo Media links to external site': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#projects')
      .verify.attributeEquals(
        '#projects a[href*="eventtwomedia.com"]',
        'target',
        '_blank'
      )
      .verify.attributeContains(
        '#projects a[href*="eventtwomedia.com"]',
        'rel',
        'noopener'
      )
      .end();
  },

  'Portfolio project has GitHub repo link': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#projects')
      .verify.visible('#projects a[href*="github.com/DanloisTovar/portafolio-vfinal"]')
      .end();
  },

  'WordPress projects section has 4 cards': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#wordpress-projects')
      .verify.visible('#wordpress-projects')
      .verify.visible('#wordpress-projects a[href*="coworkingdanlois"]')
      .verify.visible('#wordpress-projects a[href*="restaurantedanlois"]')
      .verify.visible('#wordpress-projects a[href*="clinicadanlois"]')
      .verify.visible('#wordpress-projects a[href*="tallerdanlois"]')
      .end();
  },

  'WordPress project links are external': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#wordpress-projects')
      .verify.attributeEquals(
        '#wordpress-projects a[href*="coworkingdanlois"]',
        'target',
        '_blank'
      )
      .end();
  },
};
