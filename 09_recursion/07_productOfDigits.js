// Product of digits
// Ex- 1342 => 1 * 3 * 4 * 2
// Time and space complexity ?
// we can optimize this code by having
// check condtion for 0
// and check condition for num {1,9}
function pod(num) {
  // base condition this means
  // num belongs to [0, 9]
  // you can also write
  // if(n % 10 === n)
  if (num > -1 && num < 10) {
    return num;
  }
  let lastDigit = num % 10;
  num = Math.floor(num / 10);
  return lastDigit * pod(num);
}
console.log(pod(55));
