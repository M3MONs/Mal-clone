const createFile = require("./createFile");

module.exports = function scrapRecommendations($) {
    recommendations = [];

    $(".recommendations .widget-content .borderClass").each(function () {
        item = {};
        first = {};
        second = {};
        // First Anime
        first.img = $(this).find("tbody tr td").eq(0).find("img").attr("data-src");
        first.link = $(this).find("tbody tr td").eq(0).find(".picSurround a").attr("href");
        first.title = $(this).find("table tbody tr td").eq(0).find("h3 a").text();
        // Add first anime to item
        item.first = first;
        // Second Anime
        second.img = $(this).find("tbody tr td").eq(1).find("img").attr("data-src");
        second.link = $(this).find("tbody tr td").eq(1).find(".picSurround a").attr("href");
        second.title = $(this).find("table tbody tr td").eq(1).find("h3 a").text();
        // Add seccond anime to item
        item.second = second;
        // text and recommendation
        item.text = $(this).find(".spaceit").eq(2).text().replace(/\n/g, " ").trim();
        item.recom = $(this).find(".lightLink").html().replace(/\n/g, " ").trim();

        recommendations.push(item);
    });

    createFile(recommendations, "recommendations");
};
