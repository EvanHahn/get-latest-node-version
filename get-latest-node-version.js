var https = require('https');

function getLatestNodeVersion(callback) {
  https.get('https://nodejs.org/dist/latest/SHASUMS256.txt', function (res) {
    if (res.statusCode !== 200) {
      callback(new Error('Received error code ' + res.statusCode));
      return;
    }

    var body = '';

    res.on('data', function (chunk) { body += chunk; });

    res.on('end', function () {
      var firstLine = body.split('\n')[0];
      var result = /v(\d+\.\d+\.\d+)/.exec(firstLine)[1];

      callback(null, result);
    });
  }).on('error', callback);
}

module.exports = getLatestNodeVersion;
