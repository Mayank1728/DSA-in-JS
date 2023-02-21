/*
   
  Height of a Binary Tree is the No OF EDGES in the LONGEST PATH from 
  ROOT node to a LEAF node.

  NOTE: Height of a Binary Tree with just 1 node is 0. As it itself is the root node 
  and leaf node.

  Implement both intutive and optimized solns
   
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
  height(node = this.root) {
    /*
       Lets consider a CASE when the binary Tree contains just 1 node:
        
         Height of a Binary Tree with just 1 node is 0. As the root node is 
         the leaf node.
        
        1. node.left is null, also, node.right is null.
        2. when height method is called, 
          2.1 leftHaft = -1 as node.left is null and recursive call returns -1
          2.2 rightHalf = -1 as node.right is null and recursive call returns -1
          2.3 return Max(leftHalf,rightHalf) + 1. This means
              return Max(-1, -1) + 1
          2.4 This simplifies and return 0;

       If I returned 0 instead of -1 it leftHalf = 0, rightHalf = 0.
       This would become return Max(0,0) + 1. Which simplifies to return 1;
       Both the approaches are correct but I find previous approach beter.
       
    */

    // BASE CASE
    if (!node) return -1;

    // RECURSIVE CALLS
    let leftHalf = this.height(node.left);
    let rightHalf = this.height(node.right);

    return Math.max(leftHalf, rightHalf) + 1;
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
        console.log(this.root);
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
console.log(directory.height());

/*
  Here N means null
    Our tree looks like this:
    
    3, 4, 6, 5, 1, 
          
             3
          /    \
         1      4 
        / \    / \
        N  2  N  6
                / \
               5   N
*/
