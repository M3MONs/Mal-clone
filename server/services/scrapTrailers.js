const createFile = require("./createFile");

module.exports = function scrapTrailers($) {
    trailers = [];

    $("#widget-promotional-video .widget-slide")
        .find("li")
        .each(function () {
            link = $(this).find("span h3 a").attr("href");
            img = $(this).find("a").attr("data-bg");
            title = $(this).find("h3").text();
            ytLink = $(this).find("a").attr("href");
            trailers.push({ title, link, img, ytLink });
        });
    createFile(trailers, "trailers");
};
