const fs = require("fs");

module.exports = function createFile(data, name) {
    const newsJson = JSON.stringify(data);
    fs.writeFile(`./data/${name}.json`, newsJson, "utf8", (e) => {
        if (e) console.log(e);
    });
};
