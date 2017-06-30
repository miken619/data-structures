var BinarySearchTree = function(value) {
  var nodes = {};
  nodes.left = null;
  nodes.right = null;
  nodes.value = value;
  
  nodes.insert = function (value) {
    var node = BinarySearchTree(value);
    
    var findNode = function (root) {

      if (root === null) {
        return;
      }

      if (root.nodes.value >= value) {
        var leftNode = root.nodes.left;
        if (leftNode !== undefined) {
          find(leftNode);
        } else {
          leftNode = node;
        }
      } else {
        var rightNode = root.nodes.right;
        if (rightNode !== undefined) {
          find(rightNode);
        } else {
          rightNode = node;
        }      
      }
    };

    findNode(this);
    
  };

  nodes.contains = function (value) {
    var findNode = function (root) {

      if (root === null) {
        return;
      }
      if (root.value === value) {
        return true;
      }
      if (root.nodes.value >= value) {
        var leftNode = root.nodes.left;
        if (leftNode !== undefined) {
          return find(leftNode);
        } 
      } else {
        var rightNode = root.nodes.right;
        if (rightNode !== undefined) {
          return find(rightNode);
        }        
      }
    };

    findNode(this);
    return false;

  };

  nodes.depthFirstLog = function () {

  };

  return nodes;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
