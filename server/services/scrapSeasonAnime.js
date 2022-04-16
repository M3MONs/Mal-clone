const createFile = require("./createFile");

module.exports = function scrapSeasonAnime($) {
    seasonAnime = [];

    $(".widget-slide:first")
        .find("li")
        .each(function () {
            link = $(this).find("a").attr("href");
            img = $(this).find("img").attr("data-src");
            title = $(this).find("h3").text();
            seasonAnime.push({ title, link, img });
        });
    createFile(seasonAnime, "seasonAnime");
};
