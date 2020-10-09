var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  _.extend(instance, stackMethods);
  instance.storage = {};
  instance.numKey = 0;

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.numKey] = value;
    this.numKey++;
  },

  pop: function() {
    var result = this.storage[this.numKey - 1];
    this.storage[this.numKey - 1] = undefined;
    this.numKey--;
    return result;
  },

  size: function() {
    if (this.numKey < 0) {
      return 0;
    } else {
      return this.numKey;
    }
  }
};