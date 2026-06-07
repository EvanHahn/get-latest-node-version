# Get the latest version of Node...from Node

Usage:

```js
import getLatestNodeVersion from "get-latest-node-version";
import semver from "semver";

const latestVersion = await getLatestNodeVersion();
const currentVersion = process.versions.node;
if (semver.lt(currentVersion, latestVersion)) {
  console.log("You are running an old version of Node!");
} else {
  console.log("You are up to date.");
}
```
