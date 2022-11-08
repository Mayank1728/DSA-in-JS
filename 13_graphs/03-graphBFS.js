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


function bfs(adjList, source){
  let queue = [source]
  let map = {}
  while(queue.length > 0){
    let currNode = queue.shift()
    map[currNode] = true;
    console.log(currNode);
    for(neighbour of adjList[currNode]){
      if(!map[neighbour]){
        queue.push(neighbour);
      }
    }
  }
}
bfs(adjList, 'a')
// Time : O()
// Space : O()
