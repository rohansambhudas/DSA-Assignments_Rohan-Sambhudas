// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0] Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0); // Dummy head of the result list
    let current = dummyHead; // Current node in the result list
    let carry = 0; // Carry value
  
    while (l1 || l2 || carry) {
      const val1 = l1 ? l1.val : 0; // Value of the current node in the first list (if exists)
      const val2 = l2 ? l2.val : 0; // Value of the current node in the second list (if exists)
      const sum = val1 + val2 + carry; // Sum of the values and carry
  
      carry = Math.floor(sum / 10); // Calculate the new carry
      const digit = sum % 10; // Calculate the current digit
  
      current.next = new ListNode(digit); // Create a new node for the current digit
      current = current.next; // Move the current pointer to the next node
  
      l1 = l1 ? l1.next : null; // Move to the next node in the first list (if exists)
      l2 = l2 ? l2.next : null; // Move to the next node in the second list (if exists)
    }
  
    return dummyHead.next; // Return the result list (excluding the dummy head)
  }

// Create the first linked list: [2,4,3]
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// Create the second linked list: [5,6,4]
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Add the two linked lists
const sumList = addTwoNumbers(l1, l2);

// Output the result: [7,0,8]
let current = sumList;
const result = [];
while (current) {
  result.push(current.val);
  current = current.next;
}
console.log(result); // Output: [7, 0, 8]
