// Count number of Zeroes
// Ex- 1903850601 => 3
function numberOfZeroes(num, count = 0) {
  if (num === 0) {
    return count;
  }
  if (num % 10 === 0) {
    count++;
  }
  num = Math.floor(num / 10);
  return numberOfZeroes(num, count);
}
console.log(numberOfZeroes(30210004));
