var express = require("express");
var mongojs = require("mongojs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();

request("http://www.charlotteobserver.com/news/", function(error, response, html){
	var $ = cheerio.load(html);
	var result = [];

	$("h4.title").each(function(i, element){
		var headline = $(this).text();
		var link = $(element).parent().attr("href");

		result.push({
			headline: headline,
			link: link
		});

		console.log(result)
	});
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
