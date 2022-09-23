// Delete a linkedList curr recursively

class curr {
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
      this.head = new curr(val);
      this.tail = this.head;
    } else {
      let traverse = this.head;
      // when traverse.next is null this means we
      // have reached the end of the linkedList
      // now we need to push new curr here
      while (traverse.next != null) {
        traverse = traverse.next;
      }
      traverse.next = new curr(val);
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
      // will break out when reaches 2nd to last curr
      while (traverse.next.next != null) {
        traverse = traverse.next;
      }
      // make the 2nd last curr as the last curr
      // 2nd last curr becomes new tail
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
      // new head is equal to next curr
      this.head = this.head.next;
      // old head .next property is null
      prevHead.next = null;
    }
    this.length--;
  }
  unshift(val) {
    if (!this.length) {
      this.head = new curr(val);
      this.tail = this.head;
    } else {
      // created new curr with provided value
      let first = new curr(val);
      // combining new curr with head
      first.next = this.head;
      // new curr is the new head now
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
  deleteRec(val, prev = null, curr = this.head) {
    // BREAK CONDITION
    if (!curr) return null;

    // Check whether this is the curr we want to delete
    if (curr.val === val) {
      console.log('Value found');
      prev.next = curr.next;
      this.length--;
      return true;
    }

    // update the prev and curr
    prev = curr;
    curr = curr.next;
    this.deleteRec(val, prev, curr);
  }
}

// playlist is an empty linkedList
let playList = new SinglyLinkedList();
playList.push('Eyes blue like the atlantic');
playList.push('If I killed someone for you');
playList.push('Change my clothes');
playList.push("The devil doesn't bargain");
playList.push('Jesus in LA');
playList.show();
playList.deleteRec('Jesus in LA');
playList.show();
console.log(playList.length);
