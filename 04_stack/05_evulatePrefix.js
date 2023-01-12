function minCostClimbingStairs(cost) {
  let start = -1;
  let price = 0;
  while (start < cost.length) {
    if (start == cost.length - 1 || start === cost.length - 2) break;
    if (cost[start + 1] < cost[start + 2]) {
      start += 1;
    } else {
      start += 2;
    }
    price += cost[start];
    console.log(start, price);
  }
  console.log(price);
}
minCostClimbingStairs([10, 15, 20]);
//                     0  1    2  3  4  5    6  7   8   9
