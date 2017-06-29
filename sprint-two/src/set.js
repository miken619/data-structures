var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(item in this._storage)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  var val = false;
  if (this._storage[item]) {
    val = true;
  }

  return val;
  
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
