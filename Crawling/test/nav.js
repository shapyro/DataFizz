const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
// const scrape = require('./scrape')

const nav = function(url, term) {
  nightmare
  .goto(url)
  .type(`.GlobalHeaderSearchbar-input`, `${term}`)
  .click('.GlobalHeaderSearchbar-submit button .elc-icon-search-nav')
  // check to see if new page loaded for Book Searches
  .wait('nav .MainNavButton h2 .MainNavButton-label')
  .click('a.RedirectMessage-link')
  .wait('h1.breadcrumb-leaf')
  // get list of books scrape()

  .evaluate(function() {
    return window.location.href
    // document.querySelector('nav .MainNavButton h2 .MainNavButton-label').text
  })
  .end()
  .then(function(result) {
    scrape(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
}

module.exports = nav;