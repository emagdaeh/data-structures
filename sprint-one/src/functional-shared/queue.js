var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};

  _.extend(instance, queueMethods);
  instance.storage = {};
  instance.frontOfLine = 0;
  instance.backOfLine = 0;

  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.backOfLine] = value;
    this.backOfLine++;
  },

  dequeue: function () {
    var result = this.storage[this.frontOfLine];
    delete this.storage[this.frontOfLine];
    this.frontOfLine++;
    return result;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};


