//O(1) Tiempo constante, no cambia con respecto a su entrada

//O(n) Tiempo lineal, debe hacer n operaciones
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    //console.log('O(n)', i);
  }
}

exampleLinear(5);

//O(n²) Tiempo cuadratico, debe hacer n^2 operaciones. Un for anidado se multiplica por si mismo
function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      //console.log('O(n²):', j);
    }
  }
}

exampleQuadratic(5);

//O(n^3) Tiempo cubico, debe hacer n^3 operaciones. Un for anidado se multiplica por si mismo
function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    //console.log(i);
    for (let j = i; j < n; j++) {
      //console.log(j);
      for (let k = j; j < n; j++) {
        //console.log(k);
      }
    }
  }
}

exampleCubic(5);

//O(log n) Tiempo logaritmico, debe hacer log n operaciones. El for se multiplica por 2 cada vez que se ejecuta.
function exampleLogarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    //console.log(i);
  }
}

exampleLogarithmic(1000000); //Solo lo hace 19.9315686 veces

//Regla del coeficiente de O(n) If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  console.log(count);
  return count;
}

//console.log(a(1000))

//Cualquier constante es despreciable en la Big O
function b(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

//console.log(b(1000))

//1 operacion no es dependiente de la entrada de n que puede ser infinito
function c(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

//console.log(c(10))

//Regla de la suma If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n))
//Es importante aplicar la regla del coeficiente antes de la suma
function d(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
//console.log(d(10))

//Regla del producto
//La regla del producto simplemente indica cómo se pueden multiplicar los Big-O.
//If f(n) es O(h(n)) and g(n) es O(p(n)), then f(n)g(n) is O(h(n)p(n)
function e(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}

//console.log(e(10))

//Regla del polinomio
//If f(n) is a polynomial of degree k, then f(n) is O(n^k)
function f(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}

//console.log(f(10));

//Algoritmo de numero primo O(sqrt(n))
function isPrime(n) {
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
primeFactors(50)
