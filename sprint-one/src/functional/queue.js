var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var numKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[numKey] = value;
    numKey++;
  };

  someInstance.dequeue = function() {
    for (var keys in storage) {
      var result = storage[keys];
      storage[keys] = undefined;
      numKey--;
      return result;
    }
  };

  someInstance.size = function() {
    if (numKey < 0) {
      return 0;
    } else {
      return numKey;
    }
  };

  return someInstance;
};
