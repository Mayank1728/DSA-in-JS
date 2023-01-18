/* 
   Balanced parenthesis
    1. {([[]])} : true
    2. {([[])}  : false
    3. {([[]]}}  : false
*/

function balancedParenthesis(string) {
  let isOpeningBracket = { '{': '}', '(': ')', '[': ']' };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (isOpeningBracket[string[i]]) stack.push(string[i]);
    else {
      let start = stack.pop();
      let close = string[i];
      if (isOpeningBracket[start] != close) {
        console.log('False');
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}
balancedParenthesis('{([[])}');
