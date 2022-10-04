// min and max of a binary search tree
/*
   Binary Search Tree

    Max method: 
     The right most node has the MAX value of a BST
     How to reach the rightmost node ?
     1. if node is empty, then return
     2. if node.right exists, go to the node.right
     3. if node.right doesn't exist,
         this means there is no value greater than curr node
         console.log(node.val) and return;


    Min method: 
     The left most node has the MINIMUB value of a BST
     How to reach the leftmost node ?
     1. if node is empty, then return
     2. if node.left exists, recursively call same function with node.left
     3. if node.left doesn't exist,
         this means there is no value greater than curr node so,
         console.log(node.val) and return;
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
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
  max(node = this.root) {
    if (!node) return;
    if (node.right) {
      this.max(node.right);
    } else {
      console.log(node.val);
      return;
    }
  }
  min(node = this.root) {
    if (!node) return;
    if (node.left) {
      this.min(node.left);
    } else {
      console.log(node.val);
      return;
    }
  }
}
let empID = new BST();
empID.insert(15);
empID.insert(10);
empID.insert(20);
empID.insert(8);
empID.insert(12);
empID.insert(17);
empID.insert(25);
console.log(empID);
empID.max();
empID.min();
