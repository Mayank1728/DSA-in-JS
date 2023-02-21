// check if the path exists between 2 vertices
const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'f'],
  f: ['d'],
};

function checkPath(adjList, start, finish) {
  // Applying DFS to find whether connection exists
  let stack = [start];
  let discovered = {};
  let isConnected = false;
  while (stack.length) {
    let curr = stack.pop();
    if (!discovered[curr]) {
      discovered[curr] = true;
      if (curr === finish) {
        isConnected = true;
        break;
      }
      for (let neighbour of adjList[curr]) stack.push(neighbour);
    }
  }
  console.log(isConnected);
  return isConnected;
  // Time : O(V + E)
  // Space : O(V)
}
checkPath(adjList, 'd', 'b');
// Note that we can use BFS or DFS for this question
