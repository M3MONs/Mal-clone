const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");
const app = express();

// scrap methods
const scrapEvents = require("./services/scrapEvents");
const scrapSeasonAnime = require("./services/scrapSeasonAnime");
const scrapMangaList = require("./services/scrapMangaList");
const scrapLatestAnime = require("./services/scrapLatestAnime");
const scrapTrailers = require("./services/scrapTrailers");
const scrapNews = require("./services/scrapNews");
const scrapDisscussion = require("./services/scrapDisscussion");
const scrapFeaturedArticles = require("./services/scrapFeaturedArticles");
const scrapReviews = require("./services/scrapReviews");
const scrapRecommendations = require("./services/scrapRecommendations");
const scrapAiring = require("./services/scrapAiring");
const scrapUpcoming = require("./services/scrapUpcoming");
const scrapPopular = require("./services/scrapPopular");

// middlewares
app.use(cors());

// port
var port = process.env.PORT || 3001;

// function to get mal home page and scrap
async function getMalHomePage() {
    try {
        const { data } = await axios.get("https://myanimelist.net/");
        console.log("Fetched MalHomePage!");
        const $ = cheerio.load(data);
        // Scrapping events
        scrapEvents($);
        scrapSeasonAnime($);
        scrapMangaList($);
        scrapLatestAnime($);
        scrapTrailers($);
        scrapNews($);
        scrapDisscussion($);
        scrapFeaturedArticles($);
        scrapReviews($);
        scrapRecommendations($);
        scrapAiring($);
        scrapUpcoming($);
        scrapPopular($);

        console.log("Scrapping done!");
    } catch (e) {
        console.log(e);
    }
}

// post methods
app.post("/events", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/events.json");
});

app.post("/season", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/seasonAnime.json");
});

app.post("/manga", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/mangaList.json");
});

app.post("/latest", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/latestEpisodes.json");
});

app.post("/trailers", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/trailers.json");
});

app.post("/news", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/news.json");
});

app.post("/disscussions", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/disscussions.json");
});

app.post("/articles", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/articles.json");
});

app.post("/reviews", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/reviews.json");
});

app.post("/recommendations", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/recommendations.json");
});

app.post("/airing", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/airing.json");
});

app.post("/upcoming", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/upcoming.json");
});

app.post("/popular", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/popular.json");
});

// interval for scraping
function fetchInterval() {
    getMalHomePage();
    setInterval(getMalHomePage, 1000 * 60 * 60 * 24); // 24h
}

// start interval
fetchInterval();

// start server
app.listen(port, () => console.log(`App listening on port ${port}!`));
