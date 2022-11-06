// write DFS algorithms for graphs from adjacencyList
//
/* 
  There are 2 ways of implementing DFS
   1. Recursive
   2. Iterative (using stack)
  
  There are 3 types of DFS
   1. InOrder
   2. PreOrder
   3. PostOrder

*/
const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'a'],
  f: ['d'],
};

// Recursive Approach
function dfs(adjList, start, map = {}) {
  map[start] = true;
  for (let neighbour in adjList[start]) {
    if (!map[neighbour]) {
      dfs(adjList, neighbour, map);
    }
  }
  console.log(start);
}
dfs(adjList, 'a');
