/*
   Queue Class implementation

   Technically we should not implement queue using array as the dequeue opeartion takes O(n) time to implement under the hood.
   So queue should be implemented using LinkedList.

   To avoid confusion I used enqueue and dequeue
   1. enqueue function
    
   
*/

class Queue {
  constructor() {
    this.top = -1;
    this.rear = -1;
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
    // if the queue was EMPTY, update top = 0 and rear = 0
    if (!this.length) {
      this.top = 0;
      this.rear = 0;
    }

    //push the value, postincrement rear, update length
    this.data[this.rear++] = val;
    this.length++;
    return true;
  }

  // removing value from the start of the array
  dequeue() {
    // if top is empty, return false
    if (this.top === this.rear) {
      console.log('Empty QUEUE!');
      return false;
    }

    this.top++;
    this.length--;
    this.show();
  }

  show() {
    // slice the array starting from top to rear
    // including top but not including rear
    // note that this.data array still contains all the enqueued elements
    console.log(this.data.slice(this.top, this.rear));
  }
}
let movie = new Queue();
movie.enqueue(1);
movie.enqueue(2);
movie.enqueue(3);
movie.enqueue(4);
movie.dequeue();
movie.enqueue(5);
movie.enqueue(6);
movie.dequeue();
movie.enqueue(7);
movie.show();
console.log(movie.top, movie.length);
