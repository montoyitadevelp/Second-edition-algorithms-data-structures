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
  return arr
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
console.log(quickSort(arr, 0, arr.length - 1))