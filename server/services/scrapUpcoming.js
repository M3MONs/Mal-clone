const createFile = require("./createFile");

module.exports = function scrapUpcoming($) {
    upcoming = [];

    $(".upcoming_ranking ul")
        .find("li")
        .each(function (i) {
            item = {};
            item.ranking = i + 1;
            item.img = $(this).find("p img").attr("data-src");
            item.link = $(this).find("p a").attr("href");
            item.title = $(this).find(".data h3").text().replace(/\n/g, " ").trim();
            item.info = $(this).find(".data .info").text().replace(/\n/g, " ").trim();
            item.members = $(this).find(".data .members").text().replace(/\n/g, " ").trim();
            upcoming.push(item);
        });

    createFile(upcoming, "upcoming");
};
