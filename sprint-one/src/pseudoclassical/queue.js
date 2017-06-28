var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.len = 0;
  this.tail = 0;
  this.head = 0;
};



Queue.prototype.enqueue = function (value) {
  this.storage[this.tail] = value;
  ++this.tail;
  ++this.len;
};

Queue.prototype.dequeue = function () {
  if (this.len > 0) {
    var temp = this.storage[this.head];
    --this.len;
    ++this.head;
    return temp;
  }
};

Queue.prototype.size = function () {
  return this.len;
};



