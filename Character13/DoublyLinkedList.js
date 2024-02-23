class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

DoublyLinkedList.prototype.insertAtHead = function (value) {
  if (this.head === null) {
    //If first node
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
};

DoublyLinkedList.prototype.insertAtTail = function (value) {
  if (this.tail === null) {
    //If first node
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

DoublyLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;

  if (this.head !== null) {
    toReturn = this.head.data;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

DoublyLinkedList.prototype.findStartingHead = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

DoublyLinkedList.prototype.findStartingTail = function (value) {
  let currentTail = this.tail;
  while (currentTail.prev) {
    if (currentTail.data == value) {
      return true;
    }
    currentTail = currentTail.prev;
  }
  return false;
};

function reverseSingleLinkedList(sll) {
  let node = sll.head;
  let prev = null;
  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    if (!temp) break;
    node = temp;
  }
  return node;
}
function deleteDuplicateInUnsortedSllBest(sll1) {
  let track = {};

  let temp = sll1.head;
  let prev = null;
  while (temp) {
    if (track[temp.data]) {
      prev.next = temp.next;
      sll1.size--;
    } else {
      track[temp.data] = true;
      prev = temp;
    }
    temp = temp.next;
  }
  console.log(temp);
}

let dll1 = new DoublyLinkedList();
dll1.insertAtHead(10); // ddl1's structure: tail: 10 head: 10
dll1.insertAtHead(12); // ddl1's structure: tail: 10 head: 12
dll1.insertAtHead(20); // ddl1's structure: tail: 10 head: 20
dll1.insertAtTail(30); // ddl1's structure: tail: 30 head: 20
dll1.insertAtTail(20); // ddl1's structure: tail: 20 head: 20
deleteDuplicateInUnsortedSllBest(dll1);

