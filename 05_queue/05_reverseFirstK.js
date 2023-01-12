// reverse first k elements of a queue
// [1, 5, 8, 9, 3], 3 : [8, 5, 1, 9, 3]

function reverseKElements(queue, k) {
  if (k < 0) return undefined;
  if (queue.length < k) return undefined;
  if (k === 0) return queue;

  let stack = [];
  let resultingQueue = [];
  for (let i = 0; i < k; i++) {
    let curr = queue.shift();
    stack.push(curr);
  }

  while (stack.length) {
    let curr = stack.pop();
    resultingQueue.push(curr);
  }

  while (queue.length) {
    let curr = queue.shift();
    resultingQueue.push(curr);
  }
  console.log(resultingQueue);
  return resultingQueue;
}
reverseKElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
