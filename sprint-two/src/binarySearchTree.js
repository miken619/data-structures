var BinarySearchTree = function(value) {
  var nodes = {};
  nodes.left = null;
  nodes.right = null;
  nodes.value = value;
  
  nodes.insert = function (value) {
    var node = BinarySearchTree(value);
    
    var findNode = function (root) {

      if (root.value > value) {
        if (root.left !== null) {
          findNode(root.left);
        } else {
          root.left = node;
        }
      } else {
        if (root.right !== null) {
          findNode(root.right);
        } else {
          root.right = node;
        }      
      }
    };

    findNode(this);
  };

  nodes.contains = function (value) {
    var result = false;
    var findNode = function (root) {

     
      if (root.value === value) {
        return result = true;
      }
      if (root.value > value) {
        if (root.left !== null) {
          findNode(root.left );
        } 
      } else {
        if (root.right !== null) {
          findNode(root.right);
        }        
      }
    };

    findNode(this);
    return result;

  };

  nodes.depthFirstLog = function (cb) {
    var findNode = function(root) {
      if (root === null) {
        return; 
      }

      cb(root.value);    
      findNode(root.left);
      findNode(root.right);
      
    };

    findNode(this);
  };

  return nodes;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
