class Queue {
  constructor() {
    this.storage = {};
    this.frontOfLine = 0;
    this.backOfLine = 0;
  }

  enqueue(value) {
    this.storage[this.backOfLine] = value;
    this.backOfLine++;
  }

  dequeue() {
    var result = this.storage[this.frontOfLine];
    delete this.storage[this.frontOfLine];
    this.frontOfLine++;
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
