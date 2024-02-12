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

function printNRecursive(n) {
  console.log(n);
  if (n > 1) {
    printNRecursive(n - 1);
  }
}
printNRecursive(10);

function base10ToString(n) {
  let binaryString = '';

  function base10ToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);

  return binaryString;
}

console.log(base10ToString(232));

function swap(strArr, index1, index2) {
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}
function permute(strArr, begin, end) {
  if (begin == end) {
    console.log(strArr);
  } else {
    for (let i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1);
}

permuteArray(['A', 'C', 'D']);
// ["A", "C", "D"]
// ["A", "D", "C"]
// ["C", "A", "D"]
// ["C", "D", "A"]
// ["D", "C", "A"]
// ["D", "A", "C"]

function flattenDictionary(dictionary) {
  let flattenedDictionary = {};

  function flattenDitionaryHelper(dictionary, propName) {
    if (typeof dictionary != 'object') {
      flattenedDictionary[propName] = dictionary;
      return;
    }
    for (let prop in dictionary) {
      if (propName == '') {
        flattenDitionaryHelper(dictionary[prop], propName + prop);
      } else {
        flattenDitionaryHelper(dictionary[prop], propName + '.' + prop);
      }
    }
  }

  flattenDitionaryHelper(dictionary, '');
  return flattenedDictionary;
}

let dictionary = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: '1',
    },
  },
};
console.log(flattenDictionary(dictionary));

function isPalindromeRecursive(word) {
  return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(word, beginPos, endPos) {
  if (beginPos >= endPos) {
    return true;
  }
  if (word.charAt(beginPos) != word.charAt(endPos)) {
    return false;
  } else {
    return isPalindromeHelper(word, beginPos + 1, endPos - 1);
  }
}

isPalindromeRecursive('racecar');