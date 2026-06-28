module.exports = {
  'Social Menu links validation': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('.home-hero__socials')
      .assert.attributeContains(
        '.home-hero__socials a[aria-label*="LinkedIn"]',
        'href',
        'linkedin.com/in/danloistovar'
      )
      .assert.attributeEquals('.home-hero__socials a[aria-label*="LinkedIn"]', 'target', '_blank')

      .assert.attributeContains(
        '.home-hero__socials a[aria-label*="GitHub"]',
        'href',
        'github.com/DanloisTovar'
      )
      .assert.attributeEquals('.home-hero__socials a[aria-label*="GitHub"]', 'target', '_blank')

      .assert.attributeContains(
        '.home-hero__socials a[aria-label*="WhatsApp"]',
        'href',
        'wa.me/34624573175'
      )
      .assert.attributeEquals('.home-hero__socials a[aria-label*="WhatsApp"]', 'target', '_blank')

      .assert.attributeContains(
        '.home-hero__socials a[aria-label*="email"]',
        'href',
        'mailto:danlois.tovar@gmail.com'
      );
  },

  'Navbar links validation': function (browser) {
    browser
      .resizeWindow(1920, 1080)
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('nav')
      .waitForElementVisible('a.group[href*="#home"]')
      .assert.visible('a.group[href*="#sobre-mi"]')
      .assert.visible('a.group[href*="#projects"]')
      .assert.visible('a.group[href*="#contact"]');
  },

  'Footer links validation': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .execute(function () {
        window.scrollTo(0, document.body.scrollHeight);
      })
      .waitForElementVisible('footer')
      // Quick links (using sections that exist in Footer.astro)
      .assert.visible('footer a[href*="#sobre-mi"]')
      .assert.visible('footer a[href*="#projects"]')
      // Social footer links
      .assert.attributeContains(
        'footer a[href*="linkedin.com"]',
        'href',
        'linkedin.com/in/danloistovar'
      )
      .assert.attributeContains('footer a[href*="github.com"]', 'href', 'github.com/DanloisTovar')
      .assert.attributeEquals('footer a[href*="github.com"]', 'target', '_blank');
  },

  'Project links validation': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .execute(function () {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView();
      })
      .waitForElementVisible('#projects')
      // Use wildcard for project URLs to be more robust
      .assert.attributeContains(
        'a[href*="danloistovar.vercel.app"]',
        'href',
        'danloistovar.vercel.app'
      )
      .assert.attributeContains(
        'a[href*="github.com/DanloisTovar/portafolio-vfinal"]',
        'href',
        'portafolio-vfinal'
      )
      .assert.attributeContains('a[href*="workgroup.com.ar"]', 'href', 'workgroup.com.ar')
      .assert.attributeContains('a[href*="latisrl.com.ar"]', 'href', 'latisrl.com.ar')
      .end();
  },
};
