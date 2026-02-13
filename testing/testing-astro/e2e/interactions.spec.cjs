module.exports = {
  'Theme toggle works': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('body')
      .waitForElementVisible('button[aria-label="Toggle theme"]')
      .execute(
        function () {
          return document.documentElement.classList.contains('dark');
        },
        [],
        function (result) {
          const isDarkInitial = result.value;
          browser.click('button[aria-label="Toggle theme"]').pause(1000);
          if (isDarkInitial) {
            browser.assert.not.hasClass('html', 'dark');
          } else {
            browser.assert.hasClass('html', 'dark');
          }
        }
      )
      .end();
  },

  'News Carousel interactions': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#news', 10000)
      .execute(function () {
        const el = document.getElementById('news');
        if (el) el.scrollIntoView();
      })
      .waitForElementVisible('#news-track')
      .pause(2000)
      .execute(
        function () {
          const track = document.getElementById('news-track');
          return {
            scrollable: track.scrollWidth > track.clientWidth,
            count: track.children.length,
          };
        },
        [],
        function (result) {
          if (result.value.scrollable) {
            browser
              .execute(function () {
                document.getElementById('news-next').click();
              })
              .pause(1500)
              .execute(
                function () {
                  return document.getElementById('news-track').scrollLeft;
                },
                [],
                function (scrollResult) {
                  this.assert.ok(scrollResult.value > 0, 'Scroll track moved forward');
                }
              )
              .execute(function () {
                document.getElementById('news-prev').click();
              })
              .pause(1500)
              .execute(
                function () {
                  return document.getElementById('news-track').scrollLeft;
                },
                [],
                function (scrollResult) {
                  this.assert.ok(scrollResult.value === 0, 'Scroll track moved back to start');
                }
              );
          }
        }
      );
  },

  'Contact Form validations': function (browser) {
    browser
      .url(browser.launchUrl + 'es')
      .waitForElementVisible('#contact', 10000)
      .execute(function () {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView();
      })
      .execute(function () {
        const btn = document.getElementById('submit-button');
        if (btn) btn.click();
      })
      .waitForElementVisible('#error-name')
      .assert.textContains('#error-name', 'obligatorio')

      .setValue('#name', 'Test User')
      .setValue('#email', 'invalid-email')
      .execute(function () {
        const btn = document.getElementById('submit-button');
        if (btn) btn.click();
      })
      .waitForElementVisible('#error-email')
      .pause(500)
      .assert.textContains('#error-email', 'válido')

      .clearValue('#email')
      .setValue('#email', 'test@example.com')
      .setValue('#subject', 'Test Subject')
      .setValue('#message', 'Hi')
      .execute(function () {
        const btn = document.getElementById('submit-button');
        if (btn) btn.click();
      })
      .waitForElementVisible('#error-message')
      .assert.textContains('#error-message', 'corto')
      .end();
  },
};
