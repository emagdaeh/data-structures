var LinkedList = function() {
  var list = {};
  // Done? Should be null because empty list to start
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // I: Value
    // O: None possibly?
    // Generate new node from node function

    /*
    Node function is the value above, and it looks like this:
    new Node = {value: null}
    reset null to equal next new node plus or minus assigning
    it to tail

    new Node(value) {

    };
    */
    // If no node present in "list", node assined to "head"
    // Else node added to list
    // Increase length of list by 1
  };

  list.removeHead = function() {
    // I: Value? Function?
    // O: The value of removed head
    // Need to move head designation node to the position the pointed to position
    // Reduce the total "length" of the list by 1
  };

  list.contains = function(target) {
    // I: Node
    // O: Boolean
    // Find specific node based on target
  };

  return list;
};


// Node generator function
var Node = function(value) {
  // I: Key/value pair
  // O: Node containing key/value pair
  // Create new object
  var node = {};

  // Use "new" and/or "this"?
  node.value = value;
  node.next = null; // new Node pointer

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
