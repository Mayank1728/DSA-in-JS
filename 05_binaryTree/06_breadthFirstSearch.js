/*
  Breadth First Search AKA Level Order

  In breadth first search you traverse all the neighbouring nodes first then move to the next level.

  Here N means null
    Our tree looks like this:
    
    preOrder = [3,1,2,4,6,5]
    
    inOrder = [1,2,3,4,5,6]

    postOrder = [2,1,5,6,4,3]
    
    BFS = [3,1,4,2,6,5]
          
             3
          /    \
         1      4 
        / \    / \
        N  2  N  6
                / \
               5   N
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
  postOrder(node = this.root) {
    if (!node) return;

    if (node.left) {
      this.postOrder(node.left);
    }

    if (node.right) {
      this.postOrder(node.right);
    }

    console.log(node.val);
  }
  preOrder(node = this.root) {
    // Break statement : when to stop ?
    // if node is null STOP
    if (!node) return;

    // push the node value inside the array
    // Base case
    console.log(node.val);

    // if left node exists ()
    if (node.left) {
      // then the left node is traversed
      // Recursive call

      this.preOrder(node.left);
    }

    // if right node exists
    if (node.right) {
      // then the right node is traversed
      // Recursive call
      this.preOrder(node.right);
    }
  }
  inOrder(node = this.root) {
    if (!node) return;

    if (node.left) {
      this.inOrder(node.left);
    }

    console.log(node.val);

    if (node.right) {
      this.inOrder(node.right);
    }
  }
  bfs() {
    // to tackle the edge case q = [null]
    if (!this.root) {
      console.log('ROOT NODE IS EMPTY');
      return;
    }

    // queue contains the root node
    let queue = [this.root];

    // if queue is not empty
    while (queue.length) {
      // remove the TOPMOST node

      let node = queue.shift();

      console.log(node.val);

      // if left exist push it to the queue
      if (node.left) {
        queue.push(node.left);
      }

      // if right exists push it to the queue
      if (node.right) {
        queue.push(node.right);
      }
    }
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
console.log(directory);
directory.bfs();
