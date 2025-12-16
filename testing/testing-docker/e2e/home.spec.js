describe('Home Page', function () {
  it('should load the home page', function (browser) {
    browser
      .url('http://localhost:3001')
      .waitForElementVisible('body', 1000)
      .assert.titleContains('Portafolio')
      .end();
  });
});
