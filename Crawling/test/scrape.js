const cheerio = require('cheerio');
const request = require('request');
const uri = 'https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=Books';

const scrape = function() {
  request('https://www.amazon.com', function(error, response, html) {
    let $ = cheerio.load(html);
    console.log(html)
    // console.log(response)
    // let books = []

    // let parent = $('ol').hasClass('a-carousel')
    // let booklist = $(parent).children('li')

    // $('li').each(function(i, element) {
    //   // let title = $(element).attr('title')
    //   console.log($(this)); 
    // })
    // $('.a-carousel-center').each(function(i, element) {
    // $('li.a-carousel-card').each(function(i, element) {
      // books[i] = $(this).children()
      // console.log(element)
      // let a = $(element).children('a').attr('title')
      // console.log(a)
    // })
    // console.log(books)
  })
}

scrape();

// module.exports = scrape;