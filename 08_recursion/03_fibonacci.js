// 0 1 1 2 3 5 8 13....
// 1 2 3 4 5 6 7 8
/* 
  Fibonacci Sequence
  first term = 0
  second term = 1
  third term = 2nd + 1st = 0 + 1
  fourth term = 3rd + 2nd = 1 + 1 = 2
  fifth term = 4th + 3rd = 2 + 1 = 3
  sixth term = 5th + 4th = 3 + 2 = 5
  seventh term = 6th + 5th = 5 + 3 = 8

  Did you notice the pattern ?
  kth term = (k - 1)th term + (k - 2)th term
  Example: 5th term = 4th term + 3rd term = 2 + 1 = 3

 */
function fibonacci(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(30));
