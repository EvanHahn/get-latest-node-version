var getLatestNodeVersion = require('..');

var semver = require('semver');
var assert = require('assert');

describe('getLatestNodeVersion', function () {
  it('returns a semver-compatible string', function (done) {
    getLatestNodeVersion(function (err, version) {
      assert.equal(err, null);
      assert.notEqual(semver.valid(version), null);
      done();
    });
  });
});
