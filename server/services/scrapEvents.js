const createFile = require("./createFile");

module.exports = function getEvents($) {
    events = [];

    $(".mxj .widget-content")
        .find("a")
        .each(function () {
            link = $(this).attr("href");
            img = $(this).find("img").attr("src");
            title = $(this).find(".text").text();
            events.push({ link, img, title });
        });
    createFile(events, "events");
};
