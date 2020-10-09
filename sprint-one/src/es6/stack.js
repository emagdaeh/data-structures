class Stack {
  constructor() {
    this.storage = {};
    this.numKey = 0;
  }

  push(value) {
    this.storage[this.numKey] = value;
    this.numKey++;
  }

  pop() {
    var result = this.storage[this.numKey - 1];
    this.storage[this.numKey - 1] = undefined;
    this.numKey--;
    return result;
  }

  size() {
    if (this.numKey < 0) {
      return 0;
    } else {
      return this.numKey;
    }
  }
}