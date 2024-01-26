function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}
//console.log(existsInString('red', 'r')); // prints 'true';
//console.log(existsInString('red', 'b'));

let str = "He's my king from this day until his last day";
let count = 0;
let pos = str.indexOf('a');
while (pos !== -1) {
  count++;
  pos = str.indexOf('a', pos + 1);
}
console.log(count);

'Red Dragon'.startsWith('Red'); // returns true
'Red Dragon'.endsWith('Dragon'); // returns true
'Red Dragon'.startsWith('Dragon'); // returns false
'Red Dragon'.endsWith('Red'); // returns false

let test1 = 'chicken,noodle,soup,broth';
test1.split(','); // ["chicken", "noodle", "soup", "broth"
let test2 = 'chicken';
test2.split(''); // ["c", "h", "i", "c", "k", "e", "n"

'Wizard of Oz'.replace('Wizard', 'Witch');

let str1 = 'JavaScript DataStructures';
let n = str1.search(/DataStructures/);
console.log(n);

//any numerics
let reg = /\d+/;
reg.test('123'); // true
reg.test('33asd'); // true
reg.test('5asdasd'); // true
reg.test('asdasd'); // false

//floating numeric
let reg1 = /^[0-9]*.[0-9]*[1-9]+$/;
reg1.test('12'); // false
reg1.test('12.2'); // true

let reg2 = /[a-zA-Z0-9]/;
reg2.test('somethingELSE'); // true
reg2.test('hello'); // true
reg2.test('112a'); // true
reg2.test('112'); // true
reg2.test('^'); // false

//query string
let uri =
  'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
let queryString = {};
uri.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
  queryString[$1] = $3;
});
console.log('ID: ' + queryString['product_id']); // ID: 2140
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category: ' + queryString['category']);

