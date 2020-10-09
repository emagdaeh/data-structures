var Queue = function() {
  var instance = Object.create(queueMethods);
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


