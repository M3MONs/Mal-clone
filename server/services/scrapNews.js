const createFile = require("./createFile");

module.exports = function scrapNews($) {
    news = [];

    $(".news-list:first")
        .find(".news-unit")
        .each(function () {
            link = $(this).find(".picSurround .image-link").attr("href");
            img = $(this).find(".picSurround .image-link img").attr("data-src");
            title = $(this).find(".news-unit-right h3 a").text();
            text = $(this).find(".news-unit-right .text p").children().remove().end().text().trim();
            news.push({ link, img, title, text });
        });
    createFile(news, "news");
};
