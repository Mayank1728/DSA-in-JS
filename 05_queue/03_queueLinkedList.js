/*
     Queue implementation using linkedList
      1. enqueue function
         if head is empty, then head and tail point to same node
         else add node to tail and update tail
         length++
      2. dequeue function
         if head is empty then return false
         else if  head === tail this means list contains JUST 1 node
           then head and tail becomes null
         else
          oldHead = head
          head = head.next
          oldHead.next = null
         length--

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    // if you are adding 1st element
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.head;
  }
  dequeue() {
    // if the list is empty return false
    if (!this.head) {
      console.log('the linkedList is empty');
      return false;
    }

    // if the list has 1 node, head = null and tail = null
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // remove the head node and update head
      let removeNode = this.head;
      this.head = this.head.next;
      removeNode.next = null;
    }
    this.length--;
    return true;
  }
  show() {
    for (let i = this.head; i != null; i = i.next) {
      console.log(i.val);
    }
  }
}

let movieTicket = new Queue();
movieTicket.enqueue('Aman');
movieTicket.enqueue('Anant');
movieTicket.enqueue('Mayank');
movieTicket.enqueue('Manubhav');
movieTicket.dequeue();
movieTicket.enqueue('Nitin');
movieTicket.enqueue('Randi');
movieTicket.enqueue('Devansh');
movieTicket.dequeue();
movieTicket.show();
console.log(movieTicket.length);
