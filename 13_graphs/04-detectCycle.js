/* 
   Find whether the given graph contains cycle
   cycle: A path where starting and end vertices are same.
   Note this code is for connected Graph ONLY.
   TechieDelight good website for DSA questions
*/
const adjList = {
  a: ['b'],
  b: ['c'],
  c: [],
};

// quite similar to dfs
function detectCycle(adjList) {
  let stack = ['a'];
  let isCyclic = false;
  let discovered = {};
  while (stack.length) {
    let curr = stack.pop();
    if (!discovered[curr]) {
      discovered[curr] = true;
      for (let i = adjList[curr].length - 1; i > -1; i--) {
        stack.push(adjList[curr][i]);
      }
    } else {
      isCyclic = true;
      break;
    }
  }
  console.log(isCyclic);
  return isCyclic;
}
detectCycle(adjList);
