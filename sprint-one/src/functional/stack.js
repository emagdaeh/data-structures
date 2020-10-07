var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var numKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numKey] = value;
    numKey++;
  };

  someInstance.pop = function(value) {
    storage[numKey] = value;
    numKey--;
  };

  someInstance.size = function(value) {
    if (numKey < 0) {
      return 0;
    } else {
      return numKey;
    }
  };

  return someInstance;
};

/*
[1, 2, 3, 4]
var size = 4;
var storage = {
  0 : 1,
  1 : 2,
  2 : 3,
  size : 4
};

storage[size] = 4
*/
