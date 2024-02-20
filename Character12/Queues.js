import { Stack } from './Stacks.js';

class Queue {
  constructor() {
    let items = [];
    //properties and methods go here
    //Añade un nuevo item al principio de la cola
    this.enqueue = (element) => {
      items.push(element);
    };

    //Remueve el primer elemento de la cola
    this.dequeue = () => {
      return items.shift();
    };

    //Retorna el primer elemento de la cola
    this.front = () => {
      return items[0];
    };

    //True si es vacio, false si no es vacio
    this.isEmpty = () => {
      return items.length == 0;
    };

    //Tamaño de la cola
    this.size = () => {
      return items.length;
    };

    //Mostrar cola
    this.print = () => {
      console.log(items.toString());
    };
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(4);

class TwoStackQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
}

TwoStackQueue.prototype.enqueue = function (val) {
  this.inbox.push(val);
};

TwoStackQueue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};
let queue1 = new TwoStackQueue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();

class QueueStack {
  constructor() {
    this.inbox = new Queue();
  } // first stack
}

QueueStack.prototype.push = function (val) {
  this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function () {
  let size = this.inbox.array.length - 1;
  let counter = 0;
  let bufferQueue = new Queue();

  while (++counter <= size) {
    bufferQueue.enqueue(this.inbox.dequeue());
  }
  let popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
};

let stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1

class Customer {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }
}

class Cashier {
  constructor() {
    this.customers = new Queue();
  }
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
};

Cashier.prototype.deliverOrder = function () {
  let finishedCustomer = this.customers.dequeue();

  console.log(
    finishedCustomer.name + ', your ' + finishedCustomer.order + ' is ready!'
  );
};

let cashier = new Cashier();
let customer1 = new Customer('Jim', 'Fries');
let customer2 = new Customer('Sammie', 'Burger');
let customer3 = new Customer('Peter', 'Drink');

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); // Jim, your Fries is ready!
cashier.deliverOrder(); // Sammie, your Burger is ready!
cashier.deliverOrder(); // Peter, your Drink is ready!
