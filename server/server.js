const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");
const app = express();

// scrap methods
const scrapEvents = require("./services/scrapEvents");
const scrapSeasonAnime = require("./services/scrapSeasonAnime");

app.use(cors());

var port = process.env.PORT || 3001;

async function getMalHomePage() {
    try {
        console.log("Fetched MalHomePage!");
        const { data } = await axios.get("https://myanimelist.net/");
        const $ = cheerio.load(data);
        scrapEvents($);
        scrapSeasonAnime($);
    } catch (e) {
        console.log(e);
    }
}

app.post("/events", function (req, res) {
    res.header("Content-Type", "application/json");
    res.sendFile(__dirname + "/data/events.json");
});

function fetchInterval() {
    getMalHomePage();
    setInterval(getMalHomePage, 1000 * 60 * 60 * 24); // 24h
}

fetchInterval();
app.listen(port, () => console.log(`App listening on port ${port}!`));
