/*
   Queue Class implementation
   Technically we should not implement queue using array
   To avoid confusion I used enqueue and dequeue
   1. push function:
     1.1 if the queue is empty, Update the top and rear
     1.2 update rear = val
     1.3 push the value in this.data
   2. pop function
     2.1 if the queue is empty, return false
     2.2 if len of queue is 1, top = null and rear = null
     2.3 else update top
   
*/

class Queue {
  constructor() {
    this.top = null;
    this.rear = null;
    this.data = [];
    this.length = 0;
  }
  // adding value at the end of the array
  push(val) {
    // if the queue was EMPTY, update the top = val
    if (!this.length) {
      this.top = val;
    }

    // push the value, update the rear, update the len
    this.data.push(val);
    this.rear = val;
    this.length++;
    return true;
  }
  // removing value from the start of the array
  shift() {
    // if top is empty, return false
    if (!this.top) {
      console.log('Empty QUEUE!');
      return false;
    }

    // if len === 1, then the queue will be empty after shift()
    // so top = null , rear = null and data.shift()
    if (this.length === 1) {
      this.top = null;
      this.rear = null;
      this.data.shift();
      return true;
    }

    // shift the data and reduce the length and update rear
    this.data.shift();
    this.length--;
    this.rear = this.data[this.length - 1];
  }
  show() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}
let movie = new Queue();
movie.push(1);
movie.push(2);
movie.push(3);
movie.push(1);
movie.shift();
movie.push(2);
movie.push(3);
movie.shift();
movie.push(5);
movie.show();
console.log(movie.top, movie.length);
