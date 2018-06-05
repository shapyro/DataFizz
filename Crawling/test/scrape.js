const cheerio = require('cheerio');
const request = require('request');
const url = 'https://www.walmart.com'
//const uri = 'https://www.walmart.com/search/?query=Books&redirect=false'
//const uri = 'https://www.walmart.com/search/?query=Books&redirect=false';

let books = []

const scrape = function(scrapeURL) {
  console.log("ScrapeURL: " + scrapeURL)
  request(scrapeURL, function(error, response, html) {
    let $ = cheerio.load(html);

    //  Let's build a book object
    let newBook = {
      id: '',
      name: '',
      author: '',
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
      let sourceURL = url + $(data1___).attr('href')
      // console.log(sourceURL)

      // HERE IS THE TITLE OF THE BOOK
      let title = $(data1___).children('.Tile-img').attr('alt')
      // console.log(title)

      // HERE IS THE IMG LINK
      let imgLink = url + $(data1___).children('.Tile-img').attr('src')
      // let image = url + imgLink

      let data2 = $(data1).next('div.tile-content')
      // console.log($(data2).html())

      let data2_ = $(data2).children('div.tile-primary')
      // console.log($(data2_).html())

      let data2__ = $(data2_).children('div.search-result-product-description')
      // console.log($(data2__).html())

      let data2___ = $(data2__).children('div.description-text')
      // console.log($(data2___).html())

      let deets = $(data2___).children('dl')
      // console.log($(deets).html())

      let auth = $(deets).children('ul.author')
      // console.log($(auth).html())

      let auth_ = $(auth).children('li')
      // console.log($(auth_).html())

      let author = $(auth_).children('ul').text()
      // console.log(author)

      let isbn = $(deets).children('ul.isbn')
      // console.log($(isbn).html())
      
      let id = $(isbn).children('li').text()
      // console.log(id)

      let data3 = $(data2).children('div.tile-aside')
      // console.log($(data3).html())

      let data3_ = $(data3).children('span')
      // console.log($(data3_).html())

      let data3__ = $(data3_).children('div')
      // console.log($(data3__).html())

      let data3___ = $(data3__).children('div.price-main-block')
      // console.log($(data3___).html())

      let data3____ = $(data3___).children('div')
      // console.log($(data3____).html())

      let price = $(data3____).children('span').text()
      // console.log(price)

      newBook = {
        id: id,
        name: title,
        author: author,
        listPrice: price,
        imageURLs: imgLink,
        sourceURL: sourceURL
      }

      if (newBook.id != '') {
        console.log(newBook)
        // books.push(newBook)
      }

    })
  })
  // console.log(books) 
}

//scrape();

module.exports = scrape;