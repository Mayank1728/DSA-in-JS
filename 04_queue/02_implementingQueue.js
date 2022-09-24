/*
   Queue Class implementation

   Technically we should not implement queue using array as the dequeue opeartion takes O(n) time to implement under the hood.
   So queue should be implemented using LinkedList.

   To avoid confusion I used enqueue and dequeue
   1. enqueue function:
     1.1 if the queue is empty, Update the top and rear
     1.2 update rear = val
     1.3.enqueue the value in this.data
   2. dequeue function
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
    /*
      YOU SHOULD NOT WRITE : this.length = this.data.length 
      because you are inside a constructor function
      which is called ONLY ONCE when you create/initialize an object.
      this.length = this.data.length statement will 
      FIX this.length = 0 as at the time of creating the object this.data
      was an empty array.
    */
  }
  // adding value at the end of the array
  enqueue(val) {
    // if the queue was EMPTY, update the top = val
    if (!this.length) {
      this.top = val;
    }

    //push the value, update the rear, update the len
    this.data.push(val);
    this.rear = val;
    this.length++;
    return true;
  }
  // removing value from the start of the array
  dequeue() {
    // if top is empty, return false
    if (!this.top) {
      console.log('Empty QUEUE!');
      return false;
    }

    // if len === 1, then the queue will be empty after dequeue()
    // so top = null , rear = null and data.dequeue()
    if (this.length === 1) {
      this.top = null;
      this.rear = null;
      this.data.shift();
      return true;
    }

    // dequeue the data using shift and reduce the length and update rear
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
movie.enqueue(1);
movie.enqueue(2);
movie.enqueue(3);
movie.enqueue(1);
movie.dequeue();
movie.enqueue(2);
movie.enqueue(3);
movie.dequeue();
movie.enqueue(5);
movie.show();
console.log(movie.top, movie.length);
