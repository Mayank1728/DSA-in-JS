/*
  complete the procedure
  Delete method: Delete a linkedList node of a given index
  deli(index) function
  Procedure:
  1. if linkedList is empty, return null
  2. if index >= 0
      2.1 if index === 0
          2.1.1 remove head node and update head
          2.1.2 update tail if length of the linkedlist is 1
          2.1.3 update the length
      2.2 else
          2.2.1 counter = 1, prev = head, curr = head.next
          2.2.2 traverse
  
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
      let oldHead = this.head;
      this.head = oldHead.next;
      oldHead.next = null;
      this.length--;

      // if linkedList contained only 1 node and that node is deleted
      // this means linkedList now empty, head = null and tail = null
      // so update the tail
      if (!this.head) this.tail = null;

      this.show();
      return true;
    }
    let prev = this.head;
    let curr = this.head.next;
    while (curr != null) {
      if (curr.val === val) {
        prev.next = curr.next;
        curr.next = null;
        this.length--;

        //if user deleted the tail/last node
        // prev.next is null
        // so we update this.tail = prev
        if (!prev.next) this.tail = prev;

        this.show();
        return true;
      }
      curr = curr.next;
      prev = prev.next;
    }
    console.log('node value was not found');
    return null; // node value was not found
  }
  deli(index) {
    if (!this.head) return null;
    // check whether index is greater than -1
    if (index >= 0) {
      // if the user wants to delete the head node
      // we need to update this.head and length
      if (index === 0) {
        let oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;

        // if linkedList contained only 1 node and that node is deleted
        // this means linkedList now empty, head = null and tail = null
        // so update the tail
        if (!this.head) this.tail = null;

        return true;
      } else {
        let counter = 1;
        let prev = this.head;
        let curr = this.head.next;
        // traversing the linkedlist until we reach end
        while (curr) {
          if (index === counter) {
            prev.next = curr.next;
            curr.next = null;
            this.length--;

            // update this.tail if user deleted the tail node
            // condition will be true when prev.next is null
            // this means we deleted the last node
            // so we update this.tail = prev
            if (!prev.next) this.tail = prev;

            this.show();
            return true;
          }
          curr = curr.next;
          prev = prev.next;
          counter++;
        }
        // the index entered was greater than the length of the linkedList
        console.log('Node cannot be DELETED as Index OUT OF BOUNDS!!');
        return false;
      }
    } else {
      console.log('Index cannot be less than 0');
      return null;
    }
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
playList.deli(5);
console.log(playList.tail);
