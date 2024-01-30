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

   let median1 = medianOfArray(arr1)
   let median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }

  let evenOffset = pos % 2 == 0 ? 1 : 0
  let offsetMinus = Math.floor(pos / 2) - evenOffset
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

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3)) // 3.5
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)) // 28
console.log(medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3)) // 2.5
