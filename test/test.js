const getLatestNodeVersion = require('..');

const semver = require('semver');
const assert = require('node:assert/strict');
const test = require('node:test');

test('returns a semver-compatible string', function (_t, done) {
  getLatestNodeVersion(function (err, version) {
    assert.equal(err, null);
    assert.notEqual(semver.valid(version), null);
    done();
  });
});