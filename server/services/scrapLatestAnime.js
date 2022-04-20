const createFile = require("./createFile");

module.exports = function scrapLatestAnime($) {
    latestEpisodes = [];

    $("#widget-episode-video .widget-slide")
        .find("li")
        .each(function () {
            link = $(this).find("a").attr("href");
            img = $(this).find("img").attr("data-src");
            title = $(this).find("span a").text();
            latestEpisodes.push({ title, link, img });
        });
    createFile(latestEpisodes, "latestEpisodes");
};
