let javaScriptObject = {};
let testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject); // {array: [1,2,3,4]}
javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject); // {array: [1,2,3,4], title:'Algorithms'

function ExampleClass() {
    this.name = 'JavaScript';
    this.sayName = function () {
        console.log(this.name);
    };
    this.array = [1, 2, 3, 4, 5];
}

//new object
let example1 = new ExampleClass();
example1.sayName(); //"JavaScript"

//new object
let example2 = new ExampleClass();
ExampleClass.prototype.sayName = function () {
    console.log(this.name);
};

example2.sayName();

function ExampleClass1(name, size) {
    this.name = name;
    this.size = size;
}

let example = new ExampleClass1('Public', 5);
console.log(example); // {name:"Public", size: 5}

// accessing public variables
console.log(example.name); // "Public"
console.log(example.size); // 5

function ExampleClass2(name, size) {
    let privateName = name;
    let privateSize = size;

    this.getName = function () {
        return privateName;
    };
    this.setName = function (name) {
        privateName = name;
    };

    this.getSize = function () {
        return privateSize;
    };
    this.setSize = function (size) {
        privateSize = size;
    };
}

let example3 = new ExampleClass2('Sammie', 3);
example3.setSize(12);
console.log(example3.privateName); // undefined
console.log(example3.getName()); // "Sammie"
console.log(example3.size); // undefined
console.log(example3.getSize());


let exampleKey = {}
exampleKey['exampleKey'] = 'exampleValue';
console.log(exampleKey);

function Animal(name, animalType) {
    this.name = name
    this.animalType = animalType
}

Animal.prototype.sayName = function () {
    console.log(this.name)
}

Animal.prototype.sayAnimalType = function () {
    console.log(this.animalType)
}

function Dog(name) {
    Animal.call(this, name, 'Dog')
}

Dog.prototype = Object.create(Animal.prototype)

let myAnimal = new Animal("ditto", "pokemon")
myAnimal.sayName()
myAnimal.sayAnimalType()

let myDog = new Dog("invictus", "niño")
myDog.sayName()
myDog.sayAnimalType()