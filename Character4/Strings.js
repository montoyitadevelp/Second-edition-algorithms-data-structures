import isPrime from "./Nums.js";

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

btoa('hello I love learning to computer program');
// aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0
atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0');
// hello I love learning to computer program

let DICTIONARY =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function encodeId(num) {
  let base = DICTIONARY.length;
  let encoded = '';

  if (num === 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  return reverseWord(encoded);
}

function reverseWord(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

function decodeId(id) {
  let base = DICTIONARY.length;
  let decoded = 0;

  for (let index = 0; index < id.split('').length; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
  }

  return decoded;
}

console.log(encodeId(11231230)); // prints 'VhU2'
console.log(decodeId('VhU2')); // prints '11231230'
function modInverse(e, phi) {
  let m0 = phi,
    t,
    q;
  let x0 = 0,
    x1 = 1;

  if (phi == 1) return 0;

  while (e > 1) {
    // q is quotient
    q = Math.floor(e / phi);
    t = phi;
    // phi is remainder now, process same as
    // Euclid's algo
    (phi = e % phi), (e = t);
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  // Make x1 positive
  if (x1 < 0) x1 += m0;
  return x1;
}

function RSAKeyPair(p, q) {
  // Need to check that they are primes
  if (!(isPrime(p) && isPrime(q))) return;

  // Need to check that they're not the same
  if (p == q) return;

  let n = p * q, phi = (p - 1) * (q - 1), e = 3, d = modInverse(e, phi);

  // Public key: [e,n], Private key: [d,n]
  return [
    [e, n],
    [d, n],
  ];
}

console.log(RSAKeyPair(5,11))
