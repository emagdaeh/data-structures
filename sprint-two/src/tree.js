var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  //Value of children should be an array
  //Place to put new nodes from addChild method
  //Incorporate value for further nodes to target
  _.extend(newTree, treeMethods);
  console.log('new tree: ', newTree);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(thing) {
  if (this.newTree === undefined) {
    this.newTree[this.value] = thing;
    console.log(this.newTree);
  }
  //I: Some value
  //O: Node
  // Set variable to hold value of child
  // Set variable to be a target of a node Tree
  // Add to the Tree
  if (this.newTree !== undefined) {
    console.log('this.children: ', this.children);
    this.children.push(thing);
  }
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
      this.contains(this.children[i]);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions? Linear
 */
