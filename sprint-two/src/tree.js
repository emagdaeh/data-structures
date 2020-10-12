var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// called by the outside (child == value you want to add to the tree)
treeMethods.addChild = function(existingChild) {
  //I: Some value
  //O: Node
  // Set variable to hold value of child
  // Set variable to be a target of a node Tree
  // Add to the Tree
  var childObject = Tree(existingChild);
  this.children.push(childObject);
};

treeMethods.contains = function(target) {
  //I: value
  //O: boolean
  //If top of tree equals target
  //return true
  //else recurse over child nodes
  //return false at end of function
  if (target === this.value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      var childObject = this.children[i];
      var wasInChild = childObject.contains(target);
      if (wasInChild) {
        return true;
      }
    }
  }
  return false;
};

/*
* Complexity: What is the time complexity of the above functions? Linear
*/