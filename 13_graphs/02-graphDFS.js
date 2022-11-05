// Depth First Search Graph
// Find number of unique path starting from g[0][0] to g[3][3]

/* 
   Constraints
    1. You can move ONLY left, right, up, or down
    2. You CANNOT vist the same node twice
    3. 1 means that path is blocked
*/

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
  visit, // To keep track of visited Verticies
  Row = grid.length,
  Col = grid[0].length,
) {
  if (!visit) {
    visit = [...Array(grid.length)].map((e) => Array(grid[0].length).fill(0));
    // just to make visit as 2D array of same size as grid
    // where visit[r][c], 0 means NOT visited and 1 means visited NODE
  }
  /* 
     Base Cases:
      1. row and col should NOT be less than 0, OUT of Bounds
      2. row anc col should be less than their lengths, OUT of Bounds
      3. grid[row][col] should NOT be 1, this means BLOCKED
      4. visit[row][col] should NOT be 1, this means ALREADY VISITED vertex
      
      if any one is true, return 0.
  */
  if (
    currRow < 0 ||
    currCol < 0 ||
    currRow == Row ||
    currCol == Col ||
    grid[currRow][currCol] == 1 ||
    visit[currRow][currCol] == 1
  ) {
    return 0;
  }

  // When you reach the destination which is last index, return 1
  // this means a valid path is found.
  if (currRow == Row - 1 && currCol == Col - 1) {
    return 1;
  }

  // Reaching here means the Vertex was NOT visied earlier
  // So now mark it as visited
  visit[currRow][currCol] = 1;

  // Initialize count as 0
  let count = 0;

  // right
  count += dfs(grid, currRow, currCol + 1, visit);

  // down
  count += dfs(grid, currRow + 1, currCol, visit);

  // left
  count += dfs(grid, currRow, currCol - 1, visit);

  // up
  count += dfs(grid, currRow - 1, currCol, visit);

  // removed from visited
  visit[currRow][currCol] = 0;
  return count;

  // Space : O()
  // Time : O()
}
console.log(dfs(grid));
