// class always starts with a capital letter
/* 
  Push method implementation in js
   1. if the linkedList is empty
     1.1 the pushed value becomes head as well as the tail 
   2. if the linkedList isn't empty
     2.1 append the pushed value at the end of the linkedList
     2.2 make the pushed value as the tail.
   3. finally increase the length of the linkedList.
*/
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
}

// playlist is an empty linkedList
let playList = new SinglyLinkedList();
playList.push('Eyes blue like the atlantic');
playList.push('Welcome to Brixton!');
playList.push('Boy in the bubble');
console.log(playList);

// shows the head of the linked list
console.log(playList.head);
// shows the tail and length
console.log(playList.tail, playList.length);
