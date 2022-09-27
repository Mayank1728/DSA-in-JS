/*
    Implementing the insert function

      The insert function will add values in the binary tree
        1. if tree is empty, make val as root node
        2. else then let traversal = root
            Inside the WHILE loop
              2.1 if traversal.val > val
                2.1.1 if traversal.left is NULL
                          then insert the node at traversal.left
                          then BREAK;
                  2.1.2 else keep traversing the left side
                          by traversal = traversal.left
              2.2 else
                  2.2.1 if traversal.right is NULL
                            then insert the val at traversal.right
                            then BREAK;
                  2.2.2 else keep traversing the right side
                          by traversal = traversal.right
      

      To Do: Implement this insert function recursively

      Note: This insert function is just to add values to a binary tree
      It doesn't add values to the tree in such a order that all the values
      to the left of the parent node are smaller and all the values to the
      right of the parent node are greater.

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
directory.insert(5);
directory.insert(2);
directory.insert(6);
directory.insert(4);
directory.insert(1);
directory.insert(9);
console.log(directory);

/*
    Our tree looks like this:
      
    3, 4, 6, 5, 1, 
          
           3
          / \
        1   4 
        /\  / \
              6
              / \
              5
*/
