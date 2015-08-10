"use strict";
var rp = require('request-promise');
var Box, box, ref, func, method;

Box = (function Box() {
  function Box(options) {
    this.options = options;
  }

  Box.prototype.request = function(verb, uri, data) {
    var options = {
      uri : this._options("apiRoot") + uri,
      method : verb,
      headers: {
        Authorization: this._options("token")
      }
    };
    if (data) {
      options.json = data;
    }
    return rp(options);
  };

  Box.prototype.get = function(uri, data) {
    return this.request("GET", uri, null);
  };

  Box.prototype.post = function(uri, data) {
    return this.request("POST", uri, data);
  };

  Box.prototype._options = function(optName) {
    switch (optName) {
      case "token":
        return this.options["token"] || ("Bearer " + process.env.BOX_TOKEN);
      case "apiRoot":
        return this.options["apiRoot"] || "https://api.box.com/2.0";
      default:
        return null;
    }
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