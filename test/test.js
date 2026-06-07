const getLatestNodeVersion = require("..");

const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs/promises");
const path = require("node:path");

const FIXTURE_PATH = path.join(__dirname, "fixture.tab");

const fetch = (url) => {
  assert.equal(url, "https://nodejs.org/download/release/index.tab");
  return Promise.resolve({
    status: 200,
    text: () => fs.readFile(FIXTURE_PATH, "utf-8"),
  });
};

test("resolves to the latest Node version", async () => {
  const version = await getLatestNodeVersion({ fetch });
  assert.equal(version, "26.3.0");
});
