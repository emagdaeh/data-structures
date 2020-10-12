/*
var BinarySearchTree = function(value) {
};
*/

var BinarySearchTree = function(value) {
  //I: Target value to search for in the tree
  //O: Value
  //C: Value < 0
  //E: Empty data set
  //Left iteration focused on decrementing the search
  //Right iteration focused on incrementing
  //Cap children at 2 (left and right)
  //Contains function to compare input vs value at current iteration
  //Conditional to dictate going into L or R tree
  //Insert function place new value as child of closest node value

  var obj = Object.create(BinarySearchTree.methods);

  obj.left = undefined;
  obj.right = undefined;
  obj.children = [];
  obj.value = value;

  return obj;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  //Conditional check for value and current node value
  //Else go left or right depending on value relation to node value
  //Recurse over child nodes until placement spot for value is found
  //Place value in new node at left or right depending on compared values
};

BinarySearchTree.methods.contains = function(value) {
  //Conditional check for value at root
  //Else iterate through the tree performing conditional check
  //Return true if found
  //Return false at end of function once every recursion has run
};

BinarySearchTree.methods.depthFirstLog = function(callback) {
  //Iterate over nodes in tree
  //Perform callback function on each node
};

/*
 * Complexity: What is the time complexity of the above functions? Linear
 */