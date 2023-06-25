class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.stack.pop();
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Usage example:
  
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop()); // Output: 3
  console.log(stack.pop()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.pop()); // Output: 1
  console.log(stack.isEmpty()); // Output: true
  console.log(stack.pop()); // Output: null  