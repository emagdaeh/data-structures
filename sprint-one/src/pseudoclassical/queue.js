var Queue = function() {
  this.storage = {};
  this.frontOfLine = 0;
  this.backOfLine = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.backOfLine] = value;
  this.backOfLine++;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[this.frontOfLine];
  delete this.storage[this.frontOfLine];
  this.frontOfLine++;
  return result;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

