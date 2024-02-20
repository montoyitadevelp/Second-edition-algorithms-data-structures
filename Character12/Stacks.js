export class Stack {
  constructor() {
    let items = [];
    //properties and methods go here
    //Añade a la parte superior
    this.push = function (element) {
      items.push(element);
    };
    //Remueve la parte superir
    this.pop = function () {
      return items.pop();
    };
    //Retorna el ultimo que fue añadido
    this.peek = function () {
      return items[items.length - 1];
    };
    //True si es vacio, sino false
    this.isEmpty = function () {
      return items.length == 0;
    };
    //Tamaño de la pila
    this.size = function () {
      return items.length;
    };
    //Limpia la pila
    this.clear = function () {
      items = [];
    };
    //Muestra el resultado
    this.print = function () {
      console.log(items.toString());
    };
  }
}

let stack = new Stack();
stack.push(1)
stack.push(3)
stack.push(4)
