// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

//  Example 1:
// Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
// Constraints:

// 0 <= x <= 231 - 1

function mySqrt(x) {
    if (x === 0) {
      return 0; // Square root of 0 is 0
    }
  
    let guess = x; // Initial guess
  
    while (true) {
      let newGuess = 0.5 * (guess + x / guess); // Update the guess using the Babylonian method
  
      if (Math.floor(newGuess) === Math.floor(guess)) {
        // Check if the integer part of the new guess is the same as the previous guess
        return Math.floor(guess); // Return the previous guess rounded down
      }
  
      guess = newGuess; // Update the guess for the next iteration
    }
  }
  

  console.log(mySqrt(4)); // Output: 2
  console.log(mySqrt(8)); // Output: 2  