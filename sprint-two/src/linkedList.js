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
    // Increase length of list by 1 - may not be necessary

    console.log('ran this');
    list.head = new Node(value);
    list.tail = list.head;

    //console.log(list.head);
    list.tail = new Node(value);

    //node.next = new Node();
  };

  list.removeHead = function() {
    // I: Value? Function?
    // O: The value of removed head
    // If head is null, set a return that the test wants - probably not necessary
    // Need to move head designation node to the pointed to position
    // Reduce the total "length" of the list by 1 - may not be necessary

    //Need lookup function to determine what head is pointing to
    //Save a reference to what the head note was pointing to
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

  /*
  var list = {
  head: null,
  tail: null,
  addToTail: function(value) {
  },
  removeHead: function() {
  },
  contains: function(target) {
  }
} */
    //Need a lookup function
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

  // Use "new" and/or "this"?
  node.value = value;
  node.next = counter; // new Node pointer - need lookup function to determine what head is pointing to
  counter++;
  return node;
  //what is returned?
  // node (which equals)  {value: 3 (for example), next: null}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
