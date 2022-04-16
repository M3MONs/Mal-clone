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

app.use(cors());

var port = process.env.PORT || 3001;

async function getMalHomePage() {
    try {
        console.log("Fetched MalHomePage!");
        const { data } = await axios.get("https://myanimelist.net/");
        const $ = cheerio.load(data);
        scrapEvents($);
        scrapSeasonAnime($);
        scrapMangaList($);
        scrapLatestAnime($);
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

// interval for scraping
function fetchInterval() {
    getMalHomePage();
    setInterval(getMalHomePage, 1000 * 60 * 60 * 24); // 24h
}

fetchInterval();

app.listen(port, () => console.log(`App listening on port ${port}!`));
