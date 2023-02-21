// inOrder, preOrder, postOrder Iterative implementaion

function inOrder(node) {
  let stack = [];
  let curr = node;
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
  // Time : O(N) N is total no of nodes
  // Space : O(H) H is the height of binary tree
}

function preOrder(node) {
  let stack = [];
  stack.push(node);
  let results = [];
  while (stack.length) {
    let curr = stack.pop();
    results.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  console.log(results);
  // Time : O(N)
  // Space : O(H)
}

function postOrder(node) {
  let stack = [];
  stack.push(node);
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
  // Time : O(N)
  // Space : O(N)
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class binaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (this.root == null) {
      this.root = new Node(val);
    } else {
      let curr = this.root;
      while (true) {
        if (val < curr.val) {
          if (curr.left == null) {
            curr.left = new Node(val);
            break;
          } else {
            curr = curr.left;
          }
        } else {
          if (curr.right == null) {
            curr.right = new Node(val);
            break;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
}

let directory = new binaryTree();
directory.insert(3);
directory.insert(4);
directory.insert(6);
directory.insert(5);
directory.insert(1);
directory.insert(2);
console.log(directory);
console.log('inOrder Traversal');
inOrder(directory.root);
console.log('preOrder Traversal');
preOrder(directory.root);
console.log('postOrder Traversal');
postOrder(directory.root);

/*
  Here N means null
    Our tree looks like this: 
          
             3
          /    \
         1      4 
        / \    / \
        N  2  N  6
                / \
               5   N
*/
