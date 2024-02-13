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
