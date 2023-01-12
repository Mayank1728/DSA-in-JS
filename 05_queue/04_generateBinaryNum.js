// Generate binary numbers from 1 to n
// n = 5 : [ '1', '10', '11', '100', '101' ]

// Time : O(N)
// Space : O(N)
function generateBinaryNums(n) {
  if (n < 1) return undefined;

  let binaryNums = [];
  let queue = ['1'];
  while (n) {
    let curr = queue.shift();
    binaryNums.push(curr);

    queue.push(curr + '0');
    queue.push(curr + '1');
    n--;
  }
  console.log(binaryNums);
  return binaryNums;
}
generateBinaryNums(5);
