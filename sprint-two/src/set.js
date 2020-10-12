var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //Iterate over set storage
  //Conditional to check item for equivalence
  //If not, add item to set
};

setPrototype.contains = function(item) {
  //Iterate over set storage
  //If item exists in storage return true
  //Else return false
};

setPrototype.remove = function(item) {
  //Iterate over set storage
  //Conditional check item for equivalence
  //If present, delete item from set
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
