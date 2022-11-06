// write DFS algorithms for graphs from adjacencyList
//
/* 
  There are 2 ways of implementing DFS
   1. Recursive
   2. Iterative (using stack)

*/
const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'a'],
  f: ['d'],
};
// let adjList = {
//   A: ['B', 'C'],
//   B: ['A', 'D', 'E'],
//   C: ['A', 'F'],
//   D: ['B'],
//   E: ['B', 'F'],
//   F: ['C', 'E'],
// };

// 1. Recursive Approach
function dfs(adjList, start, map = {}) {
  // first mark start as visited
  map[start] = true;
  // Now loop through each neighbour of start
  for (let neighbour of adjList[start]) {
    // if Neighbour is NOT yet visited
    if (!map[neighbour]) {
      // make neighbour as the new start node
      dfs(adjList, neighbour, map);
    }
  }
  // reching here means its a dead end or leaf node
  // you can't go deeper so print the value of start.
  console.log(start);
}
dfs(adjList, 'A');

// 2. Iterative approach using stack
