const createFile = require("./createFile");

module.exports = function scrapMangaList($) {
    mangaList = [];

    $("#widget-manga-store .widget-slide")
        .find("li")
        .each(function () {
            link = $(this).find("a").attr("href");
            img = $(this).find("img").attr("data-src");
            title = $(this).find("span a").text();
            mangaList.push({ link, img, title });
        });
    createFile(mangaList, "mangaList");
};
