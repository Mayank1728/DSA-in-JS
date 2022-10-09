// sum of digits of a number using recursion
// Ex- 1342 => 1 + 3 + 4 + 2 = 10
// Time and space complexity ?
function sod(num) {
  // Base condition when num == 0 return 0
  if (num === 0) {
    return 0;
  }

  // get the last digit using %
  let lastDigit = num % 10;

  // Now the remove the last digit from the num
  num = Math.floor(num / 10);

  // the sum is last digit + sum of Remaining digits of num
  return lastDigit + sod(num);
}
console.log(sod(1342));
