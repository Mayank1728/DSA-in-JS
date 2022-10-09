function reverseNumber(num, start = 0) {
  if (num === 0) {
    return start;
  }
  start = start * 10 + (num % 10);
  num = Math.floor(num / 10);
  return reverseNumber(num, start);
}
console.log(reverseNumber(12345));
