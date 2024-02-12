let exampleSet = new Set();

exampleSet.add(1);
exampleSet.add(1);
exampleSet.add(2);
exampleSet.add(3);
exampleSet.delete(2);
console.log(exampleSet);

function intersectSets(setA, setB) {
  let intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
intersectSets(setA, setB);

function isSuperset(setA, subset) {
  for (let elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

let setSuperA = new Set([1, 2, 3, 4]);
let setSuperB = new Set([2, 3]);
let setSuperC = new Set([5]);

isSuperset(setSuperA, setSuperB);
isSuperset(setSuperA, setSuperC);

function unionSet(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
}
let setUnionA = new Set([1, 2, 3, 4]);
let setUnionB = new Set([2, 3]);
let setUnionC = new Set([5]);
unionSet(setUnionA, setUnionB); // Set {1, 2, 3, 4}
unionSet(setUnionA, setUnionC);

function differenceSet(setA, setB) {
  let difference = new Set(setA);
  for (let elem of setB) {
    difference.delete(elem);
  }
  return difference;
}
let setDifferenceA = new Set([1, 2, 3, 4]);
let setDifferenceB = new Set([2, 3]);
differenceSet(setDifferenceA, setDifferenceB);

function containDuplicated(arr) {
    return new Set(arr).size !== arr.length
}
console.log(containDuplicated([1, 2, 3, 4, 5, 5]))

function uniqueList(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}
console.log(uniqueList([1, 2, 3, 4], [2, 3, 4, 5]))
