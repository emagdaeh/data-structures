var LinkedList = function() {
  var list = Object.create(LinkedList.methods);
  list.head = null;
  list.tail = null;
  //list.length = 0;
  //console.log(list);
  //list = {head: {value: x, next: pointer}, tail: {value: y, next: null}, length: x, addtoTail: function{}, removeHead: function{}, contains: function()}
  return list;
};

LinkedList.methods = {

  addToTail: function(value) {
    // if there is no head, add new node to head
    // if there is a head, add a new node at tail and create a "next" reference on the previous node
    // But how to create a "next" reference on a node we've already created
    // Place a next reference on the head because the head always exists in the list object
    /*
    var createdNode = Node(value);
    createdNode.next = this.head;
    console.log('createdNode: ', createdNode);
    */

    // first tail added keeps next: null
    // reassign "current tail" next pointer to the new node
    // then reassign "new tail" which will default contain next: null
    if (!this.head) {
      var createdNode = Node(value);
      this.head = createdNode;
      this.tail = createdNode;
    } else {
      var createdNode = Node(value);
      this.tail.next = createdNode;
      this.tail = createdNode;
    }
  },

  removeHead: function() {
    //Need to store head's pointer
    //Reassign head to whatever was pointed at
    //return value of prior head

    // return value of head
    // somehow reassign head to whatever was pointed at
    var result = this.head.value;
    //this.head = this.tail <-- what we had
    this.head = this.head.next; // <-- is what I did here clear?

    return result;
  },

  contains: function(target) {
    //
    if (target === this.tail.value || target === this.head.value ) {
      return true;
    } else {
      return false;
    }
  }
};


// Node generator function
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
