var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  
  var findLeaf = function (node) {
  
    if (node.children.length < 2) {
      node.children.push(tree);
      return;
    } else {
      for (var i = 0; i < 2; ++i) {
        findLeaf(node.children[i]);        
      }
    } 
  };

  findLeaf(this);
};

treeMethods.contains = function(target) {
  var result = false;
  var findLeaf = function (node) {
    if (!node) {
      return;
    }
  
    if (node.value === target) {
      result = true;
      return;
    } else {
      for (var i = 0; i < 2; ++i) {
        findLeaf(node.children[i]);
      }
    } 
  };
  findLeaf(this);
  return result;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
