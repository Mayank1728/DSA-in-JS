// Depth First Search Graph
// Find number of unique path starting from g[0][0] to g[3][3]

/* 
   Constraints
    1. You can move ONLY left, right, up, or down
    2. You CANNOT vist the same node twice
    3. 1 means that path is blocked
*/

// Todo : Problems with the function fix
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

function dfs(
  grid,
  currRow = 0,
  currCol = 0,
  visited = [...Array(grid.length)].map((e) => Array(grid[0].length).fill(0)),
) {
  console.log(visited);
  const Row = grid.length;
  const Col = grid[0].length;
  // Base Cases
  // when currRow or currCol becomes -1
  if (currRow < 0 || currCol < 0) {
    return 0;
  }
  // when currRow or currCol goes out of bounds
  if (currRow == Row || currCol == Col) {
    return 0;
  }
  // when grid[r][c] hits 1
  if (grid[currRow][currCol] == 1) {
    return 0;
  }
  // when you reach the destinaion return 1
  // as this is a valid path
  if (currRow == Row - 1 && (currCol = Col - 1)) {
    return 1;
  }
  if (!visited[currRow][currCol]) {
    visited[currRow][currCol] = 1;
  } else {
    return 0;
  }
  let count = 0;

  // up
  count = count + dfs(grid, currRow - 1, currCol, visited);
  // right
  count = count + dfs(grid, currRow, currCol + 1, visited);
  // down
  count = count + dfs(grid, currRow + 1, currCol, visited);
  // left
  count = count + dfs(grid, currRow, currCol - 1, visited);
  // removed from visited
  visited[currRow][currCol] = 0;
  return count;
}
console.log(dfs(grid));
