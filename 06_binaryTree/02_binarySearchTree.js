/*
    Insert Function for Binary Search Tree
    NOTE : Depending upon the values inserted, BST can become skewed.
    
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class bst {
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

    // Time : O(N) if tree is skewed and (log N) for balanced
    // Space : O(1)
  }
}
let directory = new bst();
directory.insert(3);
directory.insert(4);
directory.insert(6);
directory.insert(5);
directory.insert(1);
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
