const createFile = require("./createFile");

module.exports = function scrapFeaturedArticles($) {
    articles = [];

    $(".news-list")
        .eq(1)
        .find(".news-unit")
        .each(function () {
            item = {};
            item.link = $(this).find(".picSurround a").attr("href");
            item.img = $(this).find(".picSurround a img").attr("data-src");
            item.title = $(this).find(".news-unit-right .title a").text();
            item.text = $(this).find(".news-unit-right .text").text().trim();
            item.info = $(this).find(".news-unit-right .information").html();
            item.info = item.info.replace(/\n/g, " ").trim();
            articles.push(item);
        });

    createFile(articles, "articles");
};
