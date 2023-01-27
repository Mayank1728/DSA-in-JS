/* 
   Given an adjacency List find out a mother vertex.
   If you are on Mother Vertex, you can reach any other node
   Note: Its not necessary that all the nodes must be directly
   adjacent for a node to be mother node. You should be able to
   reach any from the mother vertex even if its not directly
   connected.
*/

// Todo Kosaraju’s Strongly Connected Component Algorithm

const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'f'],
  f: ['d'],
};

function findMotherVertex(adjList) {
  let vertices = Object.keys(adjList);
  const totalVertices = vertices.length;
  let motherVertex = -1;
  for (let i = 0; i < vertices.length; i++) {
    let vertex = vertices[i];
    motherVertex = dfs(vertex, adjList, totalVertices);
    // if motherVertex exists means its not -1
    // then break
    console.log(motherVertex);
    if (motherVertex != -1) break;
  }
  console.log(motherVertex);
  return motherVertex;

  /* 
  Time : O(V(V + E)) as we are applying DFS on each vertex
  and time complexity of doing DFS on SINGLE vertex is O(V + E)
  Space : O(V) for the array
  */
}

function dfs(vertex, adjList, totalVertices) {
  let stack = [vertex];
  let discovered = {};
  let maxNodesVisited = 0;
  while (stack.length) {
    let curr = stack.pop();
    if (!discovered[curr]) {
      discovered[curr] = true;
      maxNodesVisited++;
      for (let i = adjList[curr].length - 1; i > -1; i--) {
        stack.push(adjList[curr][i]);
      }
    }
  }
  if (maxNodesVisited === totalVertices) return vertex;
  else return -1;
}
findMotherVertex(adjList);
