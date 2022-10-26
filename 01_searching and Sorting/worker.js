class hello {
  #name = 'Mayank';
  getName() {
    return this.#name;
  }
}
let a = new hello();
console.log(a.getName());
