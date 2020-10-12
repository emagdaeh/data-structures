

// Instantiate a new graph
var Graph = function() {
  this.children = [];
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //Create new node
  //Append it to graph
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //Conditional check for node
  //If found return true
  //Else recurse through nodes to look for input node equality
  //Return false if never found
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Iterate over graph
  //Conditional to check node vs target node in graph
  //If equal, delete
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //Iterate over nodes to search for fromNode value and toNode value
  //Conditional to determine if fromNdoe child equals toNode value
  //Return true if found
  //Else return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //Iterate over nodes to search for fromNode value and toNode value
  //Assign fromNode child to equal toNode value
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //Iterate over nodes to search for fromNode value and toNode value
  //Set fromNode child to undefined
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //Iterate over each node
  //Perform cb function on each node as it passes
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


