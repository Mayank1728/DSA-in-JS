function maxSubarray(arr) {
  let sum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let a = [];
      for (let k = i; k <= j; k++) {
        a.push(arr[k]);
      }
      let localSum = 0;
      for (let l = 0; l < a.length; l++) {
        localSum += a[l];
      }
      if (localSum > sum) {
        sum = localSum;
      }
    }
  }
  console.log(sum);
}
maxSubarray([-4, 2, 2, 3, 4, -10]);
