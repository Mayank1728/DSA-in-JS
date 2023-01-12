// implementing a queue using stacks
/* 
   There are 2 ways
    1. O(N) dequeue with O(1) enqueue
    2. O(1) enqueue and O(1) dequeue
*/

// Time: O(N) deque and O(1) enqueue
class QueueUsingStack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  enqueue(val) {
    this.stack.push(val);
    this.length++;

    // Time: O(1)
  }
  dequeue(val) {
    if (this.length === 0) return undefined;

    let tempStack = [];
    while (this.stack.length) {
      let popped = this.stack.pop();
      tempStack.push(popped);
    }

    let submit = tempStack.pop();
    while (tempStack.length) {
      let popped = tempStack.pop();
      this.stack.push(popped);
    }
    this.length--;

    // Time : O(N)
    // Space : O(N)
    return submit;
  }
}

/* 
  Optimized Queue Using stack
  Time : O(1) for enqueue and O(1) *amortized for dequeue 
  amortized means that most of the time O(1) for dequeue 
  but at times and rarely we might encounter O(N) runtime 
*/
class OptimizedStack {
  constructor() {
    this.stack = [];
    this.revStack = [];
  }
  enqueue(val) {
    this.stack.push(val);
  }
  dequeue() {
    if (!this.stack.length && !this.revStack.length) return undefined;
    if (!this.revStack.length) {
      while (this.stack.length) {
        let pop = this.stack.pop();
        this.revStack.push(pop);
      }
      return this.revStack.pop();
    }
  }
}

let book = new OptimizedStack();
book.enqueue(5);
book.enqueue(10);
book.dequeue();
book.enqueue(15);
book.enqueue(2);
book.dequeue();
console.log(book.stack);
