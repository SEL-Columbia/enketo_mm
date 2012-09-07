(function() {

  if (!(window.console && console.log)) {
    (function() {
      var console, length, methods, noop, _results;
      noop = function() {};
      methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
      length = methods.length;
      console = window.console = {};
      _results = [];
      while (length--) {
        _results.push(console[methods[length]] = noop);
      }
      return _results;
    })();
  }

  window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments_);
    if (this.console) {
      return console.log(Array.prototype.slice.call(arguments_));
    }
  };

}).call(this);
