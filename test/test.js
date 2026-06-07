const getLatestNodeVersion = require("..");

const semver = require("semver");
const assert = require("node:assert/strict");
const test = require("node:test");

test("resolves to a semver-compatible string", async () => {
  const version = await getLatestNodeVersion();
  assert.notEqual(semver.valid(version), null);
});
