class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  preOrder() {
    let stack = [];
    stack.push(this);
    let result = [];
    while (stack.length) {
      let curr = stack.pop();
      result.push(curr.val);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
    console.log(result);
  }
  inOrder() {
    let stack = [];
    let curr = this;
    let result = [];
    while (stack.length || curr) {
      if (curr) {
        stack.push(curr);
        curr = curr.left;
      } else {
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
      }
    }
    console.log(result);
  }
  postOrder() {
    let stack = [];
    stack.push(this);
    let pre = [];
    let result = [];
    while (stack.length) {
      let curr = stack.pop();
      pre.push(curr.val);
      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    while (pre.length) {
      result.push(pre.pop());
    }
    console.log(result);
  }
}
