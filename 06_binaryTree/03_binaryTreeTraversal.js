/*
  Implementing preOrder, Inorder, postOrder traversals RECURSIVE

  In-Order : 
    <left> <root> <right>
  Pre-Order :
    <root> <left> <right>
  Post-Order :
    <left> <right> <root>
  
*/
function preOrder(node) {
  // Break statement : when to stop ?
  // if node is null STOP
  if (!node) return;

  console.log(node.val);

  preOrder(node.left);

  preOrder(node.right);
}

function inOrder(node) {
  if (!node) return;

  inOrder(node.left);

  console.log(node.val);

  inOrder(node.right);
}

function postOrder(node) {
  if (!node) return;

  postOrder(node.left);

  postOrder(node.right);

  console.log(node.val);
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

  Visualization: https://algorithm-visualizer.org/brute-force/binary-tree-traversal

  Trick to remember: in order means ROOT node is b/w left & right

  Explain Like I am 5

  1. Check whether the left node exists

        if it does exist then it starts traversing the left node & 
        this left node becomes the new root node & everything
        starts again from step 1 again with different root node
        
        else it STOPS OR comes back after traversing the left node


  2. Then print the root node value

  3. Now check whether the right node exists
        
        if it does exist then it starts traversing the right node & 
        this right node becomes the new root node and everything
        starts again from step 1 again with different root node
        
        else it STOPS OR comes back after traversing the right node
*/
