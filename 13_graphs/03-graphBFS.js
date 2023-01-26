// Implementing BFS on graph
// Here we are visiting each node ONCE, BUT LEVEL BY LEVEL

const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b', 'f'],
  f: ['d'],
};

// update so that it works for disconnected graph
// BFS implemented using Queue
function bfs(adjList) {
  let queue = ['a'];
  let isVisited = {};
  while (queue.length) {
    let curr = queue.shift();
    if (!isVisited[curr]) {
      console.log(curr);
      isVisited[curr] = true;
      for (neighbour of adjList[curr]) {
        queue.push(neighbour);
      }
    }
  }
}
bfs(adjList, 'a');
// Time : O()
// Space : O()
