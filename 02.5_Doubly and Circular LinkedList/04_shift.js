// shift : remove the first node from the start of  linkedList

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
    this.lenght = 0;
  }
  push(val) {
    // created node
    let addNode = new Node(val);

    // if DoublyLinkedList is empty then
    if (!this.head) {
      this.head = addNode;
      this.tail = addNode;
    }

    // else (if it contains 1 or more nodes)
    else {
      /*
        There are 2 ways of inserting a node at the end
         1. start traversing from head when you reach the end add the new node
         2. Directly insert node at this.tail

     */

      // 1. Directly insert node at this.tail

      this.tail.next = addNode;
      addNode.prev = this.tail;
      this.tail = addNode;

      // 2. start traversing from head when you reach the end add the new node

      /*
       // reach the last node of the linkedList & as the NEXT of last node is null
       // when we reach the last node its next will be null
       
       let traverse = this.head;

       while (traverse.next) {
         traverse = traverse.next;
       }

       traverse.next = addNode;
       addNode.prev = traverse;
       this.tail = addNode;
      */
    }
    this.lenght++;
  }
  pop() {
    if (!this.head) {
      console.log('CANNOT REMOVE NODE, LinkedList is EMPTY!');
      return 1;
    } else if (this.head === this.tail || this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondLastNode = this.tail.prev;
      secondLastNode.next = null;
      this.tail.next = null;
      this.tail = secondLastNode;
    }
    this.lenght--;
    console.log(this);
  }
  shift() {
    if (!this.head) {
      console.log('CANNOT REMOVE NODE, LinkedList is EMPTY!');
      return 1;
    } else if (this.head === this.tail || this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondNode = this.head.next;
      this.head.next = null;
      this.head = secondNode;
      this.head.prev = null;
    }
    this.lenght--;
    console.log(this);
  }
}

// playlist is an empty linkedList
let playList = new DoublyLinkedList();
playList.push('Eyes Blue Like the Atlantic');
playList.push('Welcome to Brixton');
playList.push('Drop Top');
playList.push('If I killed someone for you');
playList.pop();
playList.shift();
