// sort the stack using stack
// [12, 42, 94, 60, 23] : [97, 60, 42, 23, 12]
// 23 is at the top     : 12 is at the top

function sortStack(stack = [12, 42, 94, 60, 23]) {
  if (!stack.length) return undefined;
  if (stack.length === 1) return stack;

  let tempStack = [];
  // while there exists element in stack
  // we know for sure that all elements are not sorted
  while (stack.length) {
    let eleFromStack = stack.pop();

    if (tempStack.length === 0) {
      tempStack.push(eleFromStack);
    } else {
      let eleFromTempStack = tempStack.pop();

      if (eleFromStack >= eleFromTempStack) {
        tempStack.push(eleFromTempStack);
        tempStack.push(eleFromStack);
      } else {
        stack.push(eleFromTempStack);
        stack.push(eleFromStack);
      }
    }
  }
  while (tempStack.length) {
    stack.push(tempStack.pop());
  }
  return stack;
  // Time : O(N^2)
  // Space : O(N)
  /* 
     because in the worst case we might need to pop all the
     elements form tempStack each time. 
     so (n-1) + (n-2) + .... + 3 + 2 + 1 times the loop will run
     Therefore time comp is O(N^2)
  */
}
// console.log(sortStack());

// using Recursion
// Time: O(N^2)
// Space : O(N) stack space
function sortStackRec(stack, tempStack = []) {
  // when stack is empty this means temp is sorted in desc
  // order so now we pop elements from tempStack and push
  // them into stack and return this stack
  if (!stack.length) {
    while (tempStack.length) {
      stack.push(tempStack.pop());
    }
    return stack;
  }

  let elementFromStack = stack.pop();
  if (!tempStack.length) {
    tempStack.push(elementFromStack);
  } else {
    let elementFromTempStack = tempStack.pop();
    if (elementFromStack >= elementFromTempStack) {
      tempStack.push(elementFromTempStack);
      tempStack.push(elementFromStack);
    } else {
      stack.push(elementFromTempStack);
      stack.push(elementFromStack);
    }
  }
  return sortStackRec(stack, tempStack);
}
console.log(sortStackRec([12, 42, 94, 60, 23]));
