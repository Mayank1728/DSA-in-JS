/* 
   Reverse a stack(the original stack should contain reversed elements)   

*/

class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
    this.top = -1;
  }
  push(val) {
    this.data[++this.top] = val;
    this.length++;
    return this.data;
  }
  pop() {
    if (this.top === -1) {
      console.log('Stack Underflow');
      return 'Stack Underflow';
    } else {
      this.length--;
      this.top--;
      return this.data.pop();
    }
  }
  peek() {
    if (this.top !== -1) {
      console.log(this.data[this.top]);
      return this.data[this.top];
    }
    console.log('stack is empty');
    return false;
  }
  show() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.data[i]);
    }
  }
  isEmpty() {
    if (this.top <= -1) {
      console.log('The stack is empty');
      return true;
    }
    return false;
  }
}
let books = new Stack();
books.push('12 Rules for Life by Jordan B. Peterson');
books.push('War of Art by Steven Pressfield');
books.push('How to fail at almost everything & still win big');
books.push('Richest Man in babyloan');
books.push('48 Laws of power');
books.push('Sapiens A brief history of humankind');
books.push('Guns Germs and Steel');
books.push('Predictably irrational');
books.push('Extreme ownership');
books.push('The selfish gene');
books.show();
console.log();
let temp1 = new Stack();
while (books.length) {
  temp1.push(books.pop());
}
books = temp1;
books.show();
