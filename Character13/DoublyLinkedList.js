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

let dll1 = new DoublyLinkedList();
dll1.insertAtHead(10); // ddl1's structure: tail: 10 head: 10
dll1.insertAtHead(12); // ddl1's structure: tail: 10 head: 12
dll1.insertAtHead(20); // ddl1's structure: tail: 10 head: 20
dll1.insertAtTail(30); // ddl1's structure: tail: 30 head: 20
console.log(dll1);
