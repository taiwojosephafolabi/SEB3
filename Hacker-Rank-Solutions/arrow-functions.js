/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] % 2 == 0) {
      nums[index] *= 2;
      index++;
    } else {
      nums[index] *= 3;
      index++;
    }
  }
  return nums;
}

// Test
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(modifyArray(nums));