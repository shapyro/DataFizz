const cheerio = require('cheerio');
const request = require('request');
const uri = 'https://www.walmart.com/search/?query=Books&redirect=false';

const scrape = function() {
  request(uri, function(error, response, html) {
    let $ = cheerio.load(html);

    $('div').each(function(i, el) {
      let node = $(el).attr('data-tl-id')

      if (node = `ProductTileListView-${i}`) {
        console.log(node)
      }
      
    })
    // for(n=0; n<10; n++) {
    //   $(`div[data-tl-id="ProductTileListView-${n}"]`).each(function(i, el) {
    //     let node = $(el)
    //     console.log(node)
    //   });
    // }

    // $('.search-result-listview-items').each(function(i, element) {
    //   // let title = $(element).attr('title')

    //   let node =  $(element).children('div').attr('data-tl-id')// === 'ProductTileListView-'+i
    //   console.log(node)
    // })

  })
}

scrape();

// module.exports = scrape;