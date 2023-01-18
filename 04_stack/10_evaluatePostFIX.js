/* 
   Evaluate Postfix expressions
   A string containing a valid postfix mathematic expression. Each digit is considered a separate number, i.e., there are no double-digit numbers.

    Normal exp : 2 + ((1 * 9) - (6 / 2))
    postfix exp : 2 1 9 * 6 2 / - +
*/

function evaluatePostFIX(exp = '219*62/-+') {
  let stack = [];
  for (let i = 0; i < exp.length; i++) {
    if (isNaN(exp[i])) {
      let second = stack.pop();
      let first = stack.pop();
      let result = doOperation(first, second, exp[i]);
      stack.push(result);
    } else {
      stack.push(exp[i]);
    }
  }
  console.log(stack);
}
evaluatePostFIX();
function doOperation(first, second, exp) {
  first = Number(first);
  second = Number(second);
  // so that js don't accidentally concat number with string
  if (exp === '+') {
    return first + second;
  } else if (exp === '-') {
    return first - second;
  } else if (exp === '*') {
    return first * second;
  }
  return first / second;
}
