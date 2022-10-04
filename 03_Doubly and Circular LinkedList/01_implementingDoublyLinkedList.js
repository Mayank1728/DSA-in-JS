// class always starts with a capital letter
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
// singlyLinked class initialized
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// playlist is an empty linkedList
let playList = new DoublyLinkedList();

// added 1 song to the playlist
playList.head = new Node('Eyes Blue like the atlantic');

// added 1 more song to the playlist
playList.head.next = new Node('Welcome to Brixton');

// added 1 more song to the playlist
playList.head.next.next = new Node('Jesus in LA');
console.log(playList);
