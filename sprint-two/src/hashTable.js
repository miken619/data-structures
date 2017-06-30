

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._colisionContainerArr = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisionHandlingArr = [];
  collisionHandlingArr.push(k);
  collisionHandlingArr.push(v);
  this._colisionContainerArr.push(collisionHandlingArr);
  this._storage.set(index, this._colisionContainerArr);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = bucket.length - 1; i >= 0; --i) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; ++i) {
    if (bucket[i][0] === k) {
      bucket[i][0] = -1;
      bucket[i][1] = -1;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


