const createFile = require("./createFile");

module.exports = function scrapDisscussion($) {
    discussions = [];

    $(".anime_discussions .widget-content")
        .find("h3")
        .each(function (i) {
            link = $(this).find("a").attr("href");
            title = $(this).find("a").text();
            discussions[i] = { link, title };
        });
    $(".anime_discussions .widget-content")
        .find("p")
        .each(function (i) {
            userLink = $(this).find("a").attr("href");
            username = $(this).find("a").text();
            // Adding the username and userLink to the discussions object
            discussions[i] = { userLink, username, ...discussions[i] };
        });
    createFile(discussions, "discussions");
};
