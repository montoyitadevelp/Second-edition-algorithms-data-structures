function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

function binarySearch(array, n) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex += 1;
    } else {
      highIndex -= 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4], 4)); // true
console.log(binarySearch([1, 2, 3, 4], 5)); // -1

//Time complexity: O(n²)
//Space complexity: O(1)
function swap(array, index1, index2) {
  let temp = array[index1]; // 6
  array[index1] = array[index2]; // 1
  array[index2] = temp; // 6
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));

function selectionSort(items) {
  let min;

  for (let i = 0; i < items.length; i++) {
    // set minimum to this position
    min = i;
    //check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    //if the minimum isn't in the position, swap it
    if (i != min) {
      swap(items, i, min);
    }
  }

  return items;
}
console.log(selectionSort([6, 1, 23, 4, 2, 3]));

function insertionSort(items) {
  let value; // the value currently being compared
  let i; // index into unsorted section
  let j; // index into sorted section

  for (i = 0; i < items.length; i++) {
    // store the current value because it may shift later
    value = items[i]; // 1

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section
    // over by one. This creates space in which to insert the value.

    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}
console.log(insertionSort([6, 1, 23, 4, 2, 3]));

function quickSort(arr, left, right) {
  if (left < right) {
    let partitionPos = partition(arr, left, right);
    quickSort(arr, left, partitionPos - 1);
    quickSort(arr, partitionPos + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let i = left; // 0
  let j = right - 1; // 0
  let pivot = arr[right];

  while (i < j) {
    while (i < right && arr[i] < pivot) {
      i++;
    }
    while (j > left && arr[j] >= pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  if (arr[i] > pivot) {
    [arr[i], arr[right]] = [arr[right], arr[i]];
  }
  return i;
}

let arr = [6, 1, 23, 4, 2, 3];
console.log(quickSort(arr, 0, arr.length - 1));

function _partition(arr, low, high) {
  let pivot = arr[high];
  let pivotloc = low;
  for (let i = low; i <= high; i++) {
    // inserting elements of less value
    // to the left of the pivot location
    if (arr[i] < pivot) {
      let temp = arr[i];
      arr[i] = arr[pivotloc];
      arr[pivotloc] = temp;
      pivotloc++;
    }
  }

  // swapping pivot to the final pivot location
  let temp = arr[high];
  arr[high] = arr[pivotloc];
  arr[pivotloc] = temp;

  return pivotloc;
}

// finds the kth position (of the sorted array)
// in a given unsorted array i.e this function
// can be used to find both kth largest and
// kth smallest element in the array.
// ASSUMPTION: all elements in arr[] are distinct
function kthSmallest(arr, low, high, k) {
  // find the partition
  let partition = _partition(arr, low, high);

  // if partition value is equal to the kth position,
  // return value at k.
  if (partition == k - 1) {
    return arr[partition];
  } else if (partition < k - 1) {
    // if partition value is less than kth position,
    // search right side of the array.
    return kthSmallest(arr, partition + 1, high, k);
  } else {
    // if partition value is more than kth position,
    // search left side of the array.
    return kthSmallest(arr, low, partition - 1, k);
  }
}

// Driver Code
let array = [10, 4, 5, 8, 6, 11, 26];
let arraycopy = [10, 4, 5, 8, 6, 11, 26];
let kPosition = 3;
let length = array.length;

console.log(kthSmallest(arraycopy, 0, array.length - 1, kPosition));

function merge(leftA, rightA) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  let leftRemains = leftA.slice(leftIndex);
  let rightRemains = rightA.slice(rightIndex);


  // add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array; // Base case: array is now sorted since it's just 1 element
  }

  let midpoint = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midpoint);
  let rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
console.log(mergeSort([6, 1, 23, 4, 2, 3]))
