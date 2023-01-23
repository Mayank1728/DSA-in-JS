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
  e: ['b', 'f'],
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

// why we don't have a base case here ?
// 1. Recursive Approach
function dfs(adjList, start, map = {}) {
  // first mark start as visited
  map[start] = true;
  console.log(start);
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
}
dfs(adjList, 'a');

// 2. Iterative approach using stack
function dfsIterative(adjList, source = 'a') {
  let stack = [source];
  let isVisited = {};
  while (stack.length > 0) {
    let curr = stack.pop();
    if (!isVisited[curr]) {
      console.log(curr);
      isVisited[curr] = true;
      for (let i = 0; i < adjList[curr].length; i++) {
        stack.push(adjList[curr][i]);
      }
    }
  }
}
dfsIterative(adjList);
// Time : O(V + E) why ? don't know exactly
// Space : O(V) lets consier a grap have V nodes connected like linkedList
