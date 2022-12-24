/*
    Implementing the insert function :The insert function will add values 
    in the binary tree
    Important Note: It doesn't add values to the tree 
    in such a order that all the values to the left of the parent node are 
    smaller and all the values to the right of the parent node are greater.
        
        Algorithm
        1. if tree is empty, make val as root node
        
        2. else, let traversal = root
            Inside the WHILE loop(never terminating condition)
                
                2.1 if traversal.val > val
                  2.1.1 if traversal.left is NULL
                            then insert the node at traversal.left
                            then BREAK;
                    2.1.2 else keep traversing the left side
                            by traversal = traversal.left
                
                            
                2.2 ELSE
                    2.2.1 if traversal.right is NULL
                              then insert the val at traversal.right
                              then BREAK;
                    2.2.2 else keep traversing the right side
                            by traversal = traversal.right
      



Tree Traversal Techniques  
        => Pre-Order Traversal : 
                <root> <left> <right>
        => In-Order Traversal : 
                <left> <root> <right>
        => Post-Order Traversal : 
                <left> <right> <root>

                
Visualization: https://algorithm-visualizer.org/brute-force/binary-tree-traversal

To-DO:
  => add quote on every topic
  => why linked list etc were created etc and tradeoffs.

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
  in(val) {
    let car = this.root;
    if (!car) {
      car = new Node(val);
    } else {
      while (1) {}
    }
  }
}
let directory = new binaryTree();
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
