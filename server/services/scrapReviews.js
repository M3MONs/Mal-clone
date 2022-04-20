const createFile = require("./createFile");

module.exports = function scrapReviews($) {
    reviews = [];

    $(".reviews .widget-content")
        .find(".item")
        .each(function () {
            item = {};
            item.img = $(this).find(".picSurround img").attr("data-src");
            item.link = $(this).find(".picSurround a").attr("href");
            item.rating = $(this).find(".info .fs10 ").text().trim();
            item.title = $(this).find(".info .reviews_h3 ").text().trim();
            item.text = $(this).find(".info .reviews_p").text();
            item.reviewLink = $(this).find(".info .textReadability a").attr("href");
            item.author = $(this).find(".info .pb0").html().replace(/\n/g, " ").trim();
            reviews.push(item);
        });

    createFile(reviews, "reviews");
};
