function nextGreater(array) {
  let stack = [];
  for (let i = 0; i < array.length; i++) {
    let flag = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        stack.push(array[j]);
        flag++;
        break;
      }
    }
    if (flag === 0 || i === array.length - 1) {
      stack.push(-1);
    }
  }
  console.log(stack);
}
nextGreater([10, 6, 3, 2, 8, 1]);
