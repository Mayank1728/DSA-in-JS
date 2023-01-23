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

// 1. Recursive Approach
function dfs(adjList, curr = 'a', isVisited = {}) {
  if (!isVisited[curr]) {
    console.log(curr);
    isVisited[curr] = true;
    for (let neighbour of adjList[curr]) {
      dfs(adjList, neighbour, isVisited);
    }
  }
}
dfs(adjList);

// 2. Iterative approach using stack
function dfsIterative(adjList, source = 'a') {
  let stack = [source];
  let isVisited = {};
  while (stack.length > 0) {
    let curr = stack.pop();
    if (!isVisited[curr]) {
      console.log(curr);
      isVisited[curr] = true;
      // iterating from the last and then pusing in the stack
      // so that the order of this is same as the recursive
      // approach
      for (let i = adjList[curr].length - 1; i > -1; i--) {
        stack.push(adjList[curr][i]);
      }
    }
  }
}
dfsIterative(adjList);
// Time : O(V + E) why ? don't know exactly
// Space : O(V) lets consier a grap have V nodes connected like linkedList
