function moveZeroes(nums) {
  let insertPos = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not zero
    if (nums[i] !== 0) {
      // Move the non-zero element to the current insertion position
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill the remaining positions with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // Output: [0]