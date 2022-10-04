// class always starts with a capital letter
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.root = null;
  }
}

let history = new CircularList();
