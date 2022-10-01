/*
           Trees
   
    1. Difference between linear and non linear data structure

        Linear data structure like arrays, linkedList, stack and queues are data
        is stored in SEQUENTIAL manner (one after the another)
        
        Trees are non-linear data structure which means data is stored NON-SEQUENTIALLY.
        Trees contains levels.
    
    2. A Tree is considered a Binary Tree IF it satisfies all 3 conditions:
        2.1 It contains EXACTLY 1 ROOT NODE 
            ROOT node: The node which has no parent.
        2.2 every PARENT node has AT MOST 2 CHILDREN(it can be 0, 1, or 2 children)
        2.3 EXACTLY 1 PATH from ROOT node to any other node
            In other words, there should be NO CYCLE in the Tree.

    
    Terminology:
        root node: first/top most node of a tree
        leaf: node with no children
        sibling: nodes with same parent
        edge: connection b/w 2 nodes


    Real World Examples:
        Trees are used to organize HIREARCHICAL data, organize data

            1. files directory
            2. html dom
            3. AI (ex- minimax tree): playing against itself what happens next
            4. JSON: javascript object notation
            5. Trie: used to store dicitionary.


    depth of x node: the length of path from root node to x node
                     OR no of edges from root to x
    
    height of x node: the LONGEST PATH from x node to the
                     leaf node.

    Height of a tree is longest path from ROOT node to LEAF node.


    Types of trees
    1. binary tree
    2. binary Search tree
    3. AVL etc

                Binary Tree
    
    Binary Tree means the parent node can have ATMOST 2 childern.
    A Node contains 
        1. val
        2. left child
        3. right child


*/
