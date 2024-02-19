class HashTable {
  constructor(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }
  put(key, value) {
    if (this.limit >= this.size) throw 'hash table is full';

    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
      hashedIndex++;

      hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
  }
  get(key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
      hashedIndex++;

      hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
  }
  hash(key) {
    // Check if int
    if (!Number.isInteger(key)) throw 'must be int';
    return this.secondHash(key % this.size);
  }
  secondHash(key) {
    let R = this.size - 2;
    return R - (key % R);
  }
  initArray(size) {
    let array = [];

    for (let i = 0; i < size; i++) {
      array.push(null);
    }
    return array;
  }
}

let exampletable = new HashTable(13);
exampletable.put(7, 'hi');
exampletable.put(20, 'hello');
exampletable.put(33, 'sunny');
exampletable.put(46, 'weather');
exampletable.put(59, 'wow');
exampletable.put(72, 'forty');
exampletable.put(85, 'happy');
exampletable.put(98, 'sad');
console.log(exampletable.get(7));

console.log(exampletable);
