const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const nav = function(url, term) {
  nightmare
  .goto(url)
  .type(`.nav-searchbar .nav-fill .nav-search-field .nav-input`, `${term}`)
  .click('.nav-searchbar .nav-right .nav-search-submit input[type="submit"]')
  // check to see if new page loaded for Book Searches
  .wait("#nav-subnav a .nav-a-content")
  // get list of books...

  .evaluate(function() {
    if (document.querySelector('img[alt="Books at Amazon"]')) {
      return true;
    }
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
}

module.exports = nav;