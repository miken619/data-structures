var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var returnVal = {};
  returnVal.storage = {};
  returnVal.len = 0;
  
  _.extend(returnVal, stackMethods);
  
  return returnVal;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.len] = value;
  ++this.len;
};

stackMethods.pop = function () {
  if (this.len > 0) {
    var temp = this.storage[--this.len];
    return temp;
  }
};

stackMethods.size = function () {
  return this.len;
};

