var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var tempHead = list.head.next;
    var returnVal = list.head;
    list.head = tempHead;
    return returnVal.value;
  };

  list.contains = function(target) {
    var pointer = list.head;
    while (pointer) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * .addToTail() is O(1)
 * .removeHead() is O(1)
 * .contains() is O(n)
 */
