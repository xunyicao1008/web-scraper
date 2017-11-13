var xray = require('x-ray')
var x = xray();

// 番剧索引URL
var animeUrl = 'https://bangumi.bilibili.com/anime/index'



// var scraperjs = require('scraperjs');
// var scraperPromise = scraperjs.DynamicScraper.create(animeUrl);
// scraperPromise.scrape(function($){
//     console.log('-------------------------')
//     console.log('$', $)
//     return $('body')
// }).then(function(res){
//     console.log('res', res)
// })

// x(animeUrl, '.nav-menu', '.m-i .i-link@href')(function(err, data){
//     console.log('bilibili-scraper...', data)
// })

var scraperjs = require('scraperjs');
scraperjs.DynamicScraper.create()
    .get(animeUrl)
	.scrape(function($, a) {
        console.log('---------------')
        setTimeout(function(){
            var text = $('.v_list').html()
            console.log('text', text)
        }, 1000)
        return {}
	})
	.then(function(res) {
        console.log('sdfsdfsdfsdfsdf')
		console.log(res);
	})