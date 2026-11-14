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

  'WordPress projects section shows the 4 project cards': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#wordpress-projects')
      // Presencia en el DOM (no texto visible): las cards viven en un carrusel
      // horizontal y en Firefox las que quedan fuera del viewport no exponen texto.
      .assert.elementPresent('#wordpress-projects img[alt="NIDO Coworking"]')
      .assert.elementPresent('#wordpress-projects img[alt="Brasa Norte"]')
      .assert.elementPresent('#wordpress-projects img[alt="Clínica Oria"]')
      .assert.elementPresent('#wordpress-projects img[alt="MotorNova"]')
      .end();
  },

  // Las demos están desactivadas a propósito: el hosting del centro de formación está
  // sin espacio, Elementor no regenera su CSS y los sitios se ven sin estilos.
  // Si alguien reactiva los links sin arreglar eso, este test falla.
  'WordPress demos stay disabled while the institute hosting is broken': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#wordpress-projects')
      .assert.not.elementPresent('#wordpress-projects a[href*="rbcampus.es"]')
      .assert.textContains(
        '#wordpress-projects',
        'Demo no disponible temporalmente'
      )
      .end();
  },
};
