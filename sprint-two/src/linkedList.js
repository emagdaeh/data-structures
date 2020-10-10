var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      var createdNode = Node(value);
      list.head = createdNode;
      list.tail = createdNode;
      console.log('tail1: ', list.tail);
    } else {
      var createdNode = Node(value);
      list.tail.next = createdNode;
      list.tail = createdNode;
      console.log('tail2: ', list.tail);
      console.log(list);
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target) {
    for (var keys in list) {
      if (list[keys].value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

// Node generator function
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? Linear
 */
