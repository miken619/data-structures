

// Instantiate a new graph
var Graph = function() {
  this.value = null;
  this.edge = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var vertice = new Graph();
  vertice.value = node;
  this.nodes[vertice.value] = vertice;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  for (var key in this.nodes) {
    if (this.nodes[key].value === node) {
      return true;
    }
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
   
  var fromNode;
  for (var key in this.nodes) {
    if (this.nodes[key].value === node) {
      fromNode = this.nodes[key];
      for (var key in fromNode.edge) {
        this.removeEdge(fromNode.value, fromNode.edge[key].value);
      }
      delete this.nodes[key];
   
    }
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for (var key in this.nodes) {   
    var node = this.nodes[key];  
 
    if (node.value === fromNode) {     
      
      for (var innerKey in node.edge) {
        if (node.edge[innerKey] === toNode) {
          result = true;
          break;
        }
      }
      
    }  
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 
  for (var key in this.nodes) {
    var node = this.nodes[key];
    if (node.value === fromNode) {
      node.edge[toNode] = toNode;
      break;
    }
  }

  for (var key in this.nodes) {
    var node = this.nodes[key];
    if (node.value === toNode) {
      node.edge[fromNode] = fromNode;
      break;
    }
  }

  
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  for (var key in this.nodes) {
    var node = this.nodes[key];
    if (node.value === fromNode) {
      delete node.edge[toNode];
      break;
    }
  }

  for (var key in this.nodes) {
    var node = this.nodes[key];
    if (node.value === toNode) {
      delete node.edge[fromNode];
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.nodes) {
    cb (this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode()     - O(1)
 * contains()    - O(n)
 * removeNode()  - O(n^2)
 * hasEdge()     - O(n)
 * addEdge()     - O(n)
 * removeEdge()  - O(n)
 * forEachNode() - O(n) * whatever complexity cb is
 */


