// write DFS algorithms for graphs from adjacencyList
//
/* 
  There are 2 ways of implementing DFS
   1. Recursive
   2. Iterative (using stack)
   Todo:  debug it once more!
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
  let map = {};
  map[source] = true;
  while (stack.length > 0) {
    let currNode = stack.pop();
    console.log(currNode);
    for (neighbour of adjList[currNode]) {
      if (!map[neighbour]) {
        map[neighbour] = true;
        stack.push(neighbour);
      }
    }
  }
}
dfsIterative(adjList);
// Time : O(V + E) why ? don't know exactly
// Space : O(V) lets consier a grap have V nodes connected like linkedList
// so at worst there will be V call frames at same time so O(V) space
