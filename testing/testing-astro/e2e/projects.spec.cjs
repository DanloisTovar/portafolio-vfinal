module.exports = {
  'EventTwo Media project link present in DOM': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#projects')
      .waitForElementPresent('#projects a[href*="eventtwomedia.com"]')
      .verify.attributeContains(
        '#projects a[href*="eventtwomedia.com"]',
        'href',
        'eventtwomedia.com'
      )
      .end();
  },

  'EventTwo Media links to external site': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementPresent('#projects a[href*="eventtwomedia.com"]')
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
      .url(browser.launchUrl + 'es')
      .waitForElementPresent('#projects a[href*="github.com/DanloisTovar/portafolio-vfinal"]')
      .verify.attributeContains(
        '#projects a[href*="github.com/DanloisTovar/portafolio-vfinal"]',
        'href',
        'portafolio-vfinal'
      )
      .end();
  },

  'WordPress projects section has 4 project links in DOM': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#wordpress-projects')
      .waitForElementPresent('#wordpress-projects a[href*="coworkingdanlois"]')
      .waitForElementPresent('#wordpress-projects a[href*="restaurantedanlois"]')
      .waitForElementPresent('#wordpress-projects a[href*="clinicadanlois"]')
      .waitForElementPresent('#wordpress-projects a[href*="tallerdanlois"]')
      .end();
  },

  'WordPress project links are external': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementPresent('#wordpress-projects a[href*="coworkingdanlois"]')
      .verify.attributeEquals(
        '#wordpress-projects a[href*="coworkingdanlois"]',
        'target',
        '_blank'
      )
      .end();
  },
};
