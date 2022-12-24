/*
  Pre-Order Traversal : 
    <root> <left> <right>
  
  
  Visualization: https://algorithm-visualizer.org/brute-force/binary-tree-traversal

  Trick to remember: preOrder means ROOT is first then left & right
  
  1. Print the root node value

  2. Then check whether the left node exists
        if it does exist then it starts traversing the left node & 
        this left node becomes the new root node 
        else it STOPS OR comes back after traversing the left node

  3. Now check whether the right node exists
        if it does exist then it starts traversing the right node & 
        this right node becomes the new root node 
        else it STOPS OR comes back after traversing the right node
  
*/
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
  preOrder(node = this.root) {
    if (!node) return;

    console.log(node.val);

    this.preOrder(node.left);

    this.preOrder(node.right);
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      // traverse is equal to root node
      let traverse = this.root;
      while (1) {
        // based on the traverse.val value
        // should I insert at the left side ?
        if (traverse.val > val) {
          // if left side of the traverse is empty/null
          // insert the new Node there
          if (!traverse.left) {
            traverse.left = new Node(val);
            break;
          }
          // go to the left side
          else {
            traverse = traverse.left;
          }
        }

        // OR should I insert at the right side ?
        else {
          // if the right side is null
          // add the new node to right
          if (!traverse.right) {
            traverse.right = new Node(val);
            break;
          }
          // ELSE go to the right side
          else {
            traverse = traverse.right;
          }
        }
      }
    }
  }
  preOrderIt() {
    let stack = [this.root];
    while (stack.length) {
      let curr = stack.pop();
      console.log(curr.val);
      if (curr.right) {
        stack.push(curr.right);
      }
      if (curr.left) {
        stack.push(curr.left);
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
directory.preOrderIt();

/*
  Here N means null
    Our tree looks like this:
    preArr = [3,1,2,4,6,5]
    3, 4, 6, 5, 1, 
          
            3
          /   \
         1     4 
        / \   / \
        N  2  N  6
                / \
               5   N
*/
