var https = require("https");

function getLatestNodeVersion() {
  return new Promise(function (resolve, reject) {
    https
      .get("https://nodejs.org/dist/latest/SHASUMS256.txt", function (res) {
        if (res.statusCode !== 200) {
          reject(new Error("Received error code " + res.statusCode));
          return;
        }

        var body = "";

        res.on("data", function (chunk) {
          body += chunk;
        });

        res.on("end", function () {
          var firstLine = body.split("\n")[0];
          var result = /v(\d+\.\d+\.\d+)/.exec(firstLine)[1];

          resolve(result);
        });
      })
      .on("error", reject);
  });
}

module.exports = getLatestNodeVersion;
