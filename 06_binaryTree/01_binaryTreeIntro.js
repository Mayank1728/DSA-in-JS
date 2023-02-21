/*
    Trees
        1. What is a Tree ? 
            Tree is a type of GRAPH, which is collection of Vertices
            (nodes) and Edges.
            A graph will be called a tree when
                a. It has a specific starting point AKA root node.
                b. Acyclic
                c. Each node has parent except for root node. 
                   parent -> children

        2. Difference between linear and non linear data structure

            Linear data structure like arrays, linkedList, stack and queues are stored in a SEQUENTIAL manner (one after the another)
            
            Trees are non-linear data structure which means they are stored 
            NON-SEQUENTIALLY.
            Trees contains levels.
    

    Binary Tree

        2. A Tree is considered a Binary Tree IF it satisfies all 3 conditions:
            2.1 It contains EXACTLY 1 ROOT NODE 
                ROOT node: The node which has no parent.
            2.2 every PARENT node has AT MOST 2 CHILDREN(it can be 0, 1, or 2 children)
            2.3 EXACTLY 1 PATH from ROOT node to any other node
                In other words, there should be NO CYCLE in the Tree.    
    
    Terminology:
        root node: node WITHOUT a PARENT node AKA starting node
        leaf node: node with NO CHILDREN
        sibling: nodes with same parent
        edge: connection b/w 2 nodes

    DEPTH of NODE x :  Distance from root node to node x
                                    OR 
                       no of edges from root node to node x
    
    HEIGHT of NODE x: the LONGEST PATH from node x to the leaf node.

    HEIGHT of a TREE:  is longest path from ROOT node to LEAF node.


    Complete Binary Tree:
        A tree in which all the levels are filled. Exception is
        made for the last level which can be filled paritally
        BUT from left to right.
    
    
    Full Binary Tree:
        Every Node has 0 or 2 children


    Balanced Tree:
        Tree is balanced when for EACH NODE difference between 
        HEIGHT of left and right subtree is 1 OR 0.

    Binary Search Tree:
        A type of Binary Tree where values are stored in a particular
        order. All the nodes to the left of curr are less than curr &
        all the nodes to right of curr are greater than curr.
    

    Real World Examples:
        
        Trees are used to organize HIREARCHICAL data like
            1. files directory
            2. html dom
            3. AI (example minimax tree): playing against itself what happens next
            4. JSON: javascript object notation
            5. Trie: used to store dicitionary.


    Other types of trees
        => AVL Trees
        => Red Black Trees
        => 2-3 Trees
        => N-ary Tree : an N-ary tree is a rooted tree in which each node has no more than N children


*/
