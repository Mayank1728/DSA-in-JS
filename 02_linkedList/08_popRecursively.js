// will update the popRec() function later

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// singlyLinked class initialized
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // length of the linked list
    this.length = 0;
  }
  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let traverse = this.head;
      // when traverse.next is null this means we
      // have reached the end of the linkedList
      // now we need to push new node here
      while (traverse.next != null) {
        traverse = traverse.next;
      }
      traverse.next = new Node(val);
      // finally change the tail
      this.tail = traverse.next;
    }
    this.length++;
  }
  pop() {
    if (!this.length) {
      // will evaluate to true when length = 0
      console.log('ERROR Empty linkedList!!');
      return 1;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      console.log('LinkedList is NOW EMPTY!!');
    } else {
      let traverse = this.head;
      // will break out when reaches 2nd to last node
      while (traverse.next.next != null) {
        traverse = traverse.next;
      }
      // make the 2nd last node as the last node
      // 2nd last node becomes new tail
      traverse.next = null;
      this.tail = traverse;
    }
    // finally decreae the length of the linkedList
    this.length--;
  }
  popRec(node, val) {}
}
