'use strict';

var Box, box, ref, func, method;

Box = (function Box() {
  function Box(options) {
    this.options = options;
  }

  Box.prototype.request = function(verb, url, data, cb) {
    cb(verb + url + data);
  };

  Box.prototype.get = function(url, data, cb) {
    return this.request("GET", url, null, cb);
  };

  Box.prototype.post = function(url, data, cb) {
    return this.request("POST", url, data, cb);
  };

  return Box;
})();

module.exports = box = function(options) {
  if (options == null) {
    options = {};
  }
  return new Box(options);
};

ref = Box.prototype;

for (method in ref) {
  func = ref[method];
  box[method] = func;
}