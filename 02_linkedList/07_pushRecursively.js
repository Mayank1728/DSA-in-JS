/* Implementing push method using recursion */

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
  // default node value will be head
  pushRec(node, val) {
    // if the linked list is empty add the 1st node
    if (!node) {
      this.head = new Node(val);
      this.tail = this.tail;
      this.length++;
      // return statement is most important part
      return this.head;
    }

    // when you reach the last node of the linkedList
    if (!node.next) {
      node.next = new Node(val);
      this.tail = node.next;
      this.length++;
      // return statement is most important part
      // else you will be stuck in infinite loop
      // return statement tells the call stack when to stop
      return this.head;
    }

    // function calling itself but this time
    // I am passing node.next and val
    this.pushRec(node.next, val);
  }
}

// playlist is an empty linkedList
let playList = new SinglyLinkedList();
playList.push('Eyes blue like the atlantic');
playList.pushRec(playList.head, 'If I killed someone for you');
playList.push('Welcome to Brixton!');
playList.push('Boy in the bubble');
playList.pushRec(playList.head, 'change my clothes');
console.log(playList.tail);

// shows the head of the linked list
console.log(playList.head);
// shows the tail and length
console.log(playList.tail, playList.length);
