get the latest version of Node...from Node
==========================================

Usage:

```js
var getLatestNodeVersion = require('get-latest-node-version');
var semver = require('semver');

getLatestNodeVersion(function (err, latestVersion) {
  if (err) { throw err; }
  
  var currentVersion = process.versions.node;
  if (semver.lt(currentVersion, latestVersion)) {
    console.log('You are running an old version of Node!');
  } else {
    console.log('You are up to date.');
  }
});
```
