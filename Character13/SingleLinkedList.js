class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    //If first node
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead.data == value) {
    // just shift the head over. Head is now this new value
    this.head = currentHead.next;
    this.size--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        // remove by skipping
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break; // break out of the loop
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    //if wasn't found in the middle or head, must be tail
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};

SinglyLinkedList.prototype.find = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

let sll1 = new SinglyLinkedList();
sll1.insert(2);
sll1.insert(1);
sll1.insert(5);
sll1.insert(3);
sll1.insert(4);
console.log(sll1);
