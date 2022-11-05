/* 
   Trees and linkedList are a subset of Graphs.
   Graphs have nodes or more formally known as Vertices and
   Edges which shows the connection between 2 Vertices

   Graphs can be represented in 3 ways :
     1. Adjacency List
     2. Adjacency Matrix
     3. Matrix
   
   Furthermore, Graphs are of 4 types:
     1. Directed Graph : Path direction is present between the Vertices
     2. Undirected Graph : Path exists both WAYS between the Vertices 
     3. Weighted Graph : There are weights assigned to graphs, all paths are not equal
     4. Unweighted Graph : All paths are of equal length

   No of edges <= (Vertices)^2
   
*/

// 1. Matrix Representation

// You can think of grid as the GRAPH itself
// You can move up, down, left, right FROM 0 TOWARDS 0, think of 0 as the node/vertex

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

// matrix[1] represents the COMPLETE ROW => [1, 0, 1]
// matrix[1][3] represents the ELEMENT AT (row, col) : (1, 3) => 1
// Here 0 represents free and 1 represents blocked
// starting from the grid[0][0] you can move along all the zeroes and can't move to 1
// matrix[r][c] = 0 represent NODES
// matrix[r][c] = 1 represents empty

// 2. Adjacency Matrix
const adjMatrix = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

// Here adjMatrix[r][c] represents whether there exists an Edge between Vertex r to c
// Similarly adjMatrix[c][r] represents whether Edge exists between Vertex c to r
// 0 implies Edge Doesn't exist
// 1 implies Edge EXISTS
// Space : O(V^2) here V is number of vertices

// 3. Adjacency List
//    Adjacency List can be represented in 2 ways using Class and using {}
const verticesOne = ['A', 'B', 'C', 'D'];
let edges = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  D: ['D', 'A'],
};
// Here the key represents the Vertex and
// the value which is an array represents the neighbours
// meaning which vertices the node is POINTING AT.

class graphNode {
  constructor(val) {
    this.val = val;
    this.neighbour = [];
  }
}
// Here val means the value at the Vertex
// Also the neighbour means which Vertices is the Node POINTING TO

// Generally we use Adjacency List for sparse Graph (E is approx = to V)
// And we use Matrix for dense graph when E is approx = V^2
