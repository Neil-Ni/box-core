var should = require('chai').should();
var Box = require('../src/box');

describe('should pass', function() {
  var box;

  var done = function (string) {
    console.log(string)
  };

  beforeEach(function() {
    box = Box({});
    console.log(box)
  });

  it('should pass', function() {
    box.get("/files", {hi: "test"}, done);
    true.should.equal(true);
  });
});