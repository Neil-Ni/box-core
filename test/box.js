var should = require('chai').should();
var expect = require('chai').expect;
var Box = require('../src/box');

describe('should pass', function() {
  var box;

  beforeEach(function() {
    box = Box();
  });

  it('should get folder', function(cb) {
    box.get("/folders/0")
      .then(function(result) {
        expect(result).to.exist;
      })
      .catch(function(error){
        expect(error).to.not.exist;
      })
      .finally(function() {
        cb();
      });
  });

  it('should create folder', function(cb) {
    box.post("/folders", {name: "New Folder", parent: {id: "0"}})
      .then(function(result) {
        expect(result).to.exist;
      })
      .catch(function(error){
        expect(error).to.not.exist;
      })
      .finally(function() {
        cb();
      });
  });
});