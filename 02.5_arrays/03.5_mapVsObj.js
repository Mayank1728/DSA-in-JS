/* 
   Implemented myMap class similar to Map data structure
   Furthermore learned about 
   
   In map Object {}
   1. in keyword
   2. Object.keys()
   3. Object.values()

   In map Data Structure
   1 .set(key, value)
   2 .get(key)
   3 .has(key)
   4 .delete(key)
   5 .size()

   Difference between Map object and Plain Object
   1. Map Object keys can be of any data type including object or functions
   2. Map Object has builtIn method for iterating over key or values
   3. Map Object maintains order of key value pairs.

*/

class myMap {
  constructor() {
    this.obj = {};
    this.size = 0;
    this.has = function (key) {
      return key in this.obj;
    };
    this.get = function (key) {
      return this.obj[key];
    };
  }
  set(key, value) {
    this.obj[key] = value;
    this.size++;
  }
  size() {
    return this.size;
  }
  delete(key) {
    if (key in this.obj) {
      delete this.obj[key];
      this.size--;
    }
  }
  values() {
    return Object.values(this.obj);
  }
}

let a = new myMap();
a.set(1, 'mayank');
a.set(2, 'anant');
a.set(3, 'manu');
console.log(a.size);
console.log(a.has('manu'));
console.log(a.has(3));
console.log(a.get(6));
console.log(a.values());

let m = {};
m[1] = 5;
m[2] = 9;
m[4] = 3;
m[3] = 4;

console.log(1 in m);
console.log(Object.keys(m));
console.log(Object.values(m));
