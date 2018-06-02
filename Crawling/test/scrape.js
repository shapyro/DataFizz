const cheerio = require('cheerio');
const request = require('request');
const uri = 'https://www.walmart.com/search/?query=Books&redirect=false';

const books = []

const scrape = function() {
  request(uri, function(error, response, html) {
    let $ = cheerio.load(html);

    //  Let's build a book
    let newBook = {
      id: '',
      name: '',
      listPrice: '',
      description: '',
      product_dimension: '',
      imageURLs: '',
      weight: '',
      sourceURL: ''
    }
    // getting Products
    $('div[data-tl-id]').each(function(i, el) {
      // console.log($(this).html())

      let top = $(el).data('tl-id', `ProductTileListView-${i}`)
      // console.log($(top).html())

      let thing1 = $(top).children('div.search-result-listview-item')
      // console.log($(thing1).html())

      let thing2 = $(thing1).children('div')
      // console.log($(thing2).html())

      let data1 = $(thing2).children('div.Grid-col')
      // console.log($(data1).html())

      let data1_ = $(data1).children('div.search-result-productimage')
      // console.log($(data1_).html())

      let data1__ = $(data1_).children('div.display-inline-block')
      // console.log($(data1__).html())

      let data1___ = $(data1__).children('a')
      // COME BACK TO THIS ONCE PASSING URL STR FROM NAVJS
      // let sourceURL = url + $(data1___).attr('href')
      // console.log(sourceURL)

      // HERE IS THE TITLE OF THE BOOK
      let title = $(data1___).children('.Tile-img').attr('alt')
      // console.log(title)

      // HERE IS THE IMG LINK
      let imgLink = $(data1___).children('.Tile-img').attr('src')
      // console.log(imgLink)

      let data2 = $(data1).next('div.Grid-col')
      console.log($(data2).html())
      
    })
  })
}

scrape();

// module.exports = scrape;