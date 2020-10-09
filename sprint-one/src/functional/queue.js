var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var frontOfLine = 0;

  var backOfLine = 0;


  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[backOfLine] = value;
    backOfLine++;
  };

  someInstance.dequeue = function () {
    //I: Obj
    //O: Modified obj
    //SE: None
    //EC: None I can think of

    // let order equal array <-- poor time complexity, refactor required
    // push enque result into array
    // dequeu check first index in array
    // compare equality to storage key/value pair
    // set storage key from equality check to undefined
    // return storage object

    var result = storage[frontOfLine];

    delete storage[frontOfLine];

    frontOfLine++;

    return result;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
