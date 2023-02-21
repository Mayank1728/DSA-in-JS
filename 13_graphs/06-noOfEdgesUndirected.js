// Count the no of edges in an undirected graph

const adjList = {
  a: ['b', 'c'],
  b: ['a', 'd', 'e'],
  c: ['a', 'e'],
  d: ['b', 'f'],
  e: ['b', 'c', 'f'],
  f: ['d', 'e'],
};

function noOfEdges(adjList) {
  let vertices = Object.keys(adjList);
  let directedEdges = 0;
  for (let vertex of vertices) {
    directedEdges += adjList[vertex].length;
  }
  console.log(directedEdges / 2);
  return directedEdges / 2;
  // Time : O(V) for looping through vertices
  // Space : O(V) for the array
}
noOfEdges(adjList);
