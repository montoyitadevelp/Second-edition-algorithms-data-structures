

//memory leak
let one = document.getElementById('one');
let two = document.getElementById('two');
one.addEventListener('click', function () {
    two.remove();
    console.log(two); // will print the html even after deletion
});


let point = document.getElementById("one");

point.addEventListener('click', function () {
    let evener = document.getElementById("two");
    evener.remove();
})

//bad
let test = {
    prop1: 'test'
}

function printProp1(test) {
    console.log(test.prop1);
}

printProp1(test); //'test'

//good
let test2 = {
    prop1: 'test'
}

function printProp2(prop2) {
    console.log(prop2);
}

printProp2(test2.prop1);

function someLargeArray() {
    return new Array(1000000);
}
let exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}
function printProperty(obj) {
    console.log(obj);
}
printProperty(exampleObject.prop1)


function redGreenBlueCount(arr) {
    let RED = 0
    let GREEN = 1
    let BLUE = 2
    let counter = new Array(3).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (curr == RED) {
            counter[RED]++;
        } else if (curr == GREEN) {
            counter[GREEN]++;
        } else if (curr == BLUE) {
            counter[BLUE]++;
        }


    }
    return counter;
}
redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]); // [1, 3, 3]

var btnOne = document.querySelector("#btn-one");
var btnTwo = document.querySelector("#btn-two");
function callbackOne() {
    let btnTwo = document.querySelector("#btn-two");

    if (!btnTwo) return;
    btnTwo.remove();
    btnOne.removeEventListener("hover", callbackOne);
}

function callbackTwo() {
    let btnOne = document.querySelector("#btn-one");

    if (!btnOne) return;
    btnOne.remove();
    btnTwo.removeEventListener("hover", callbackTwo);
}
btnOne.addEventListener("click", callbackOne);
btnTwo.addEventListener("click", callbackTwo);