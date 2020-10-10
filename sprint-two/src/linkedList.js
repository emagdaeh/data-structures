var LinkedList = function() {
  var list = Object.create(LinkedList.methods);
  list.head = null;
  list.tail = null;
  list.length = 0;
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
    if (!this.head) {
      var createdNode = Node(value);
      this.head = createdNode;
      this.tail = createdNode;
    } else {
      var createdNode = Node(value);
      this.tail = createdNode;
      this.head.next = length;
    }

    this.length++;
  },

  removeHead: function() {
    //Need to store head's pointer
    //Reassign head to whatever was pointed at
    //return value of prior head

    // return value of head
    // somehow reassign head to whatever was pointed at
    var result = this.head.value;
    console.log(result);

    this.head = this.tail;
    // QUESTION FOR HELP DESK, IS THIS ACCEPTABLE?

    return result;
  },

  contains: function(target) {
    //ANOTHER QUESTION IS THIS BELOW CHEATING?
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
