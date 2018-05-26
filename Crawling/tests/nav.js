// module.exports = {
//   'Demo test Google' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .click('button[name=btnG]')
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// };


module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
      .end()
  }
}

// module.exports = {
//   'step one' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('button[name=btnG]', 1000)
//   },

//   'step two' : function (browser) {
//     browser
//       .click('button[name=btnG]')
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// };