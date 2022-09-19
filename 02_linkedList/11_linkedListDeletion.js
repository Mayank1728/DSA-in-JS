/*
  Delete method: Delete a linkedList node of a given value
  Procedure:
  1. if the linkedList is empty, return null
  2. if the first node contains the value
     2.1 store the 1st node
     2.2 make the 2nd node as new head
     2.3 remove the connection between old head and new head
  3. else let prev = head and let curr = head.next
     3.1 if curr.val === val, 
        3.1.1 prev.next = curr.next
        3.1.2 curr.next = null
        3.1.3 return true
     3.2 else curr = curr.next and prev = prev.next
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
  pop() {
    if (!this.length) {
      // will evaluate to true when length = 0
      console.log('ERROR Empty linkedList!!');
      return null;
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
  shift() {
    if (!this.length) {
      console.log('ERROR LinkedList is empty!!');
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      console.log('LinkedList is now EMPTY!');
    } else {
      // prevHead stores old head
      const prevHead = this.head;
      // new head is equal to next node
      this.head = this.head.next;
      // old head .next property is null
      prevHead.next = null;
    }
    this.length--;
  }
  unshift(val) {
    if (!this.length) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      // created new node with provided value
      let first = new Node(val);
      // combining new node with head
      first.next = this.head;
      // new node is the new head now
      this.head = first;
    }
    this.length++;
  }
  search(val) {
    if (!this.head) {
      console.log('The linkedList is empty!');
      return null;
    } else {
      let traverse = this.head;
      let index = 0;
      while (traverse) {
        if (traverse.val === val) {
          console.log(`Found ${val} at ${index}th index`);
          // to stop further traversal you can also use break
          return 0;
        }
        traverse = traverse.next;
        index++;
      }
      console.log('Value NOT FOUND!!');
      return null;
    }
  }
  show() {
    if (!this.head) return null;
    let traverse = this.head;
    while (traverse != null) {
      console.log(traverse.val);
      traverse = traverse.next;
    }
  }
  delete(val) {
    if (!this.head) {
      console.log('Empty LinkedList!!');
      return null;
    }
    // first node contains the value
    if (this.head.val === val) {
      console.log('Element was found at 0th position');
      let h = this.head;
      this.head = h.next;
      h.next = null;
      this.length--;
      this.show();
      return true;
    }
    let prev = this.head;
    let curr = this.head.next;
    while (curr != null) {
      if (curr.val === val) {
        console.log('value found and deleted');
        prev.next = curr.next;
        curr.next = null;
        this.length--;
        this.show();
        return true;
      }
      curr = curr.next;
      prev = prev.next;
    }
    console.log('node value was not found');
    return null; // node value was not found
  }
}

// playlist is an empty linkedList
let playList = new SinglyLinkedList();
playList.push('Eyes blue like the atlantic');
playList.push('If I killed someone for you');
playList.push('Change my clothes');
playList.push("The devil doesn't bargain");
playList.push('Jesus in LA');
playList.push('Dopamine Addict');
console.log(playList.length);
console.log();
playList.delete('Welcome to Brixton');
console.log(playList.length);
