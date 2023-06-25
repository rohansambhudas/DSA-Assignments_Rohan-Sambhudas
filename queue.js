class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Usage example:
  
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.dequeue()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.dequeue()); // Output: 3
  console.log(queue.isEmpty()); // Output: true
  console.log(queue.dequeue()); // Output: null  