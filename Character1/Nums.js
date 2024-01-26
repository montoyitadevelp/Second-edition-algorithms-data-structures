//Algoritmo de numero primo O(sqrt(n))
export default function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

//console.log(isPrime(11));

function primeFactors(n) {
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // n must be odd at this point. So we can skip one element  (Note i = i + 2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  // This condition is to handle the case when n is a prime number
  // greater than 2
  if (n > 2) {
    console.log(n);
  }
}
//primeFactors(50);

// O(n)
function modularExponentiation(base, exponencial, module) {
  if (module === 1) return 0;
  let result = 1;

  for (let i = 0; i < exponencial; i++) {
    result = (result * base) % module;
  }

  return result;
}
modularExponentiation(2, 5, 5);

function maxDivide(number, divisor) {
  while (number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

function isUgly(number) {
  number = maxDivide(number, 2);

  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

function arrayNUglyNumbers(n) {
  let counter = 0,
    currentNumber = 1,
    uglyNumbers = [];

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }

    currentNumber++;
  }

  return uglyNumbers;
}
//console.log(arrayNUglyNumbers(7))