const fs = require("fs");

module.exports = function createFile(data, name) {
    const newsJson = JSON.stringify(data);

    // Create directory if not exists
    fs.access("./data", function (err) {
        if (err) {
            fs.mkdir("./data", function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });

    // Create the file
    fs.writeFile(`./data/${name}.json`, newsJson, "utf8", (e) => {
        if (e) console.log(e);
    });
};
