var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // I: Value
    // O: None possibly?
    // Generate new node from node function
    // If no node present in "list", node assined to "head"
    // Else node added to list
    // Increase length of list by 1 - may not be necessary

    var createdNode = new Node(value);

    if (!this.head) {
      this.head = createdNode;
    } else {

      tail.next = createdNode;
    }

  };

  list.removeHead = function() {
    // I: Value? Function?
    // O: The value of removed head
    // If head is null, set a return that the test wants - probably not necessary
    // Need to move head designation node to the pointed to position
    // Reduce the total "length" of the list by 1 - may not be necessary

    var result = list.head;

    list.head = {};// node with counter++ to indicate next spot

    return result;
  };

  list.contains = function(target) {
    // I: Node
    // O: Boolean
    // Find specific node based on target with conditional
    // Return true if present
    // Else return false
  };

  return list;
};

var counter = 0;
// Node generator function
var Node = function(value) {
  // I: Key/value pair
  // O: Node containing key/value pair
  // Create new object
  var node = {};

  node.value = value;
  node.next = counter;
  counter++;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
