function countDownToZero(n) {
  // base case. Stop at 0
  if (n < 0) {
    return; // stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1); // count down 1
  }
}
//countDownToZero(12);

// Solution iterative fibonacci
function getNthFibo(n) {
  if (n <= 1) return n;
  let sum = 0,
    last = 1,
    lastlast = 0;

  for (let i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
}
//getNthFibo(5);

//Solution recursive fibonacci
function getNthFibo1(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo1(n - 1) + getNthFibo1(n - 2);
  }
}
//getNthFibo1(5)

//Solution recursive tail fibonacci
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastlast + last);
}

getNthFiboBetter(5, 0, 1);

function pascalTriangle(row, col) {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}
pascalTriangle(5, 2);
