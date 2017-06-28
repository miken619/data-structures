var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var returnVal = Object.create(queueMethods);
  returnVal.storage = {};
  returnVal.len = 0;
  returnVal.tail = 0;
  returnVal.head = 0;
  
  return returnVal;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.tail] = value;
  ++this.tail;
  ++this.len;
};

queueMethods.dequeue = function () {
  if (this.len > 0) {
    var temp = this.storage[this.head];
    --this.len;
    ++this.head;
    return temp;
  }
};

queueMethods.size = function () {
  return this.len;
};

