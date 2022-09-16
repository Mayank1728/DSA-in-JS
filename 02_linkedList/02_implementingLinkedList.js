// class always starts with a capital letter
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
  }
}

// playlist is an empty linkedList
let playList = new SinglyLinkedList();

// added 1 song to the playlist
playList.head = new Node('Eyes Blue like the atlantic');

// added 1 more song to the playlist
playList.head.next = new Node('Welcome to Brixton');

// added 1 more song to the playlist
playList.head.next.next = new Node('Jesus in LA');
console.log(playList);

// Isn't this tedious ?
// Everytime i need to write playList.head.next.next...
// what if I had 100 playlists it will be so messy!!
// Therefore we make methods on this playlist to add, delete  nodes etc
