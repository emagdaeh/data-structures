var Stack = function() {
  this.storage = {};
  this.numKey = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.numKey] = value;
  this.numKey++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.numKey - 1];
  this.storage[this.numKey - 1] = undefined;
  this.numKey--;
  return result;
};

Stack.prototype.size = function() {
  if (this.numKey < 0) {
    return 0;
  } else {
    return this.numKey;
  }
};