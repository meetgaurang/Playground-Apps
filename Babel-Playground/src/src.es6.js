
class Hello {
  constructor (name) {
      this.name = name; 
  }

  sum(a, b) {
      return a + b; 
  }
  getName() {
      return this.name; 
  }
}

let obj = new Hello("Hello World!!");
console.log(obj.getName());

console.log("3 + 2 = " + obj.sum(3, 2));