/* 
   Find whether the given graph contains cycle
   cycle: A path where starting and end vertices are same.
   Works for connected or disconnected graphs.
   TechieDelight good website for DSA questions
*/
const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'f'],
  f: ['d'],
};

// quite similar to dfs
function detectCycle(adjList) {
  const vertex = Object.keys(adjList);
  let isCyclic = false;
  let discovered = {};
  for (let i = 0; i < vertex.length; i++) {
    if (!discovered[vertex[i]] && !isCyclic) {
      isCyclic = dfs(vertex[i], adjList, discovered);
    }
  }
  console.log(isCyclic);
  return isCyclic;
  // Time : O(V + E)
  // Space : O(V + E)
}

function dfs(vertex, adjList, discovered) {
  let stack = [vertex];
  while (stack.length) {
    let curr = stack.pop();
    if (!discovered[curr]) {
      discovered[curr] = true;
      for (let i = adjList[curr].length - 1; i > -1; i--)
        stack.push(adjList[curr][i]);
    } else return true;
  }
  return false;
}

detectCycle(adjList);
