// Normal expression : 72 / 6 * 3 - 9 can be written as (((72 / 6) * 3) - 9)
// Converted to Postfix : "72 6 / 3 * 9 -"
// Note that here space is the delimiter to distinguish between
// 72 from 7 and 2 being considered 2 different digits

// How does parseInt works ?
function evulatePostfix(string) {
  let str = '';
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    // if string[i] is space and str.length is not 0
    // to protect against pushing NaN in the stack
    if (string[i] === ' ' && str.length != 0) {
      let value = parseInt(str, 10);
      stack.push(value);
      str = '';
    }
    // convert string[i] to Number and check whether its number
    else if (Number.isInteger(Number(string[i]))) {
      str = str + string[i];
    }
    // if operator is found
    else {
      let second = stack.pop();
      let first = stack.pop();
      let result = apply(first, string[i], second);
      stack.push(result);
    }
  }
  console.log(stack.pop());
}
function apply(firstNum, operator, secondNum) {
  if (operator === '+') {
    return firstNum + secondNum;
  } else if (operator === '-') {
    return firstNum - secondNum;
  } else if (operator === '*') {
    return firstNum * secondNum;
  } else if (operator === '/') {
    return firstNum / secondNum;
  }
}
evulatePostfix('72 6 / 3 * 9 -');
