function findSumBetter(arr, weight) {
  let hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[difference] != undefined) {
      return [i, hashtable[difference]];
    } else {
      // store index
      hashtable[currentElement] = i;
    }
  }
}

findSumBetter([1, 2, 3, 4, 5], 9);

function arraySlice(array, beginIndex, endIndex) {
  // If no parameters passed, return the array
  if (!beginIndex && !endIndex) {
    return array;
  }

  let partArray = [];

  // If both begin and end index specified return the part of the array
  for (let i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }

  return partArray;
}
arraySlice([1, 2, 3, 4], 1, 2); // [2]
arraySlice([1, 2, 3, 4], 2, 4); // [3,4]

function medianOfArray(array) {
  let length = array.length;
  // Odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  let median1 = medianOfArray(arr1);
  let median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }

  let evenOffset = pos % 2 == 0 ? 1 : 0;
  let offsetMinus = Math.floor(pos / 2) - evenOffset;
  let offsetPlus = Math.floor(pos / 2) + evenOffset;

  if (median1 < median2) {
    return medianOfTwoSortedArray(
      arr1.slice(offsetMinus),
      arr2.slice(offsetMinus),
      offsetPlus
    );
  } else {
    return medianOfTwoSortedArray(
      arr2.slice(offsetMinus),
      arr1.slice(offsetMinus),
      offsetPlus
    );
  }
}

/* console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3)); // 3.5
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)); // 28
console.log(medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3)); // 2.5 */

function commonElements(kArray) {
  let hashmap = {};
  let last = [];
  let answer = [];
  for (let i = 0; i < kArray.length; i++) {
    let currentArray = kArray[i];
    last = null;
    for (let j = 0; j < currentArray.length; j++) {
      let currentElement = currentArray[j];
      if (last !== currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }
  // Iterate through hashmap
  for (let prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}
commonElements([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2],
]);

function Matrix(rows, columns) {
  let jaggedarray = new Array(rows);
  for (var i = 0; i < columns; i++) {
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}
Matrix(3, 3);

let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function run(input, result) {
  if (input.length == 0) {
    return result;
  }

  // add the first row to result
  result = result.concat(input.shift());

  // add the last element of each remaining row
  for (let i = 0; i < input.length; i++) {
    result.push(input[i].pop());
  }

  // add the last row in reverse order
  result = result.concat(input.pop().reverse());

  // add the first element in each remaining row (going upwards)
  let tmp = [];

  for (let i = 0; i < input.length; i++) {
    tmp.push(input[i].shift());
  }
  result = result.concat(tmp.reverse());
  console.log('result', result);
  return run(input, result);
}

let result = run(input, []);


