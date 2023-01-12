// Implement 2 stacks using 1 Array
class TwoStacks {
  constructor(size) {
    this.array = new Array(size);
    this.size = size;
    this.s1 = -1;
    this.s2 = size;
  }
  push1(val) {
    // stackOverFlow
    if (this.s1 + 1 === this.s2) return false;
    this.array[++this.s1] = val;
  }
  push2(val) {
    // stackOverFlow
    if (this.s2 - 1 === this.s1) return false;
    this.array[--this.s2] = val;
  }
  pop1() {
    // stackUnderFlow
    if (this.s1 === -1) return false;
    let value = this.array[this.s1--];
    return value;
  }
  pop2() {
    // stackUnderFlow
    if (this.s2 === this.size) return false;
    let value = this.array[this.s2++];
    return value;
  }
}
