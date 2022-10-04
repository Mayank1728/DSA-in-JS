/* 
  Fibonacci Sequence : 0 1 1 2 3 5 8 13....
  
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

  Here the base case will be 1st term which is 0 and 2nd term which is 1

 */

// sequence
// 0 1 1 2 3 5 8 13....

// term
// 1 2 3 4 5 6 7 8...

function fibonacci(n) {
  // if n === 1 which means 1st term return 0
  if (n === 1) {
    return 0;
  }
  // if n === 2 which means 2nd term return 1
  if (n === 2) {
    return 1;
  }
  // else return f(n - 1) + f(n - 1)
  // leap of faith is required
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(30));
