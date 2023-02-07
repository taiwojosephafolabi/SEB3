function getSecondLargest(nums) {
  let test1 = nums[0];
  let test2 = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if(nums[i] > test1) {
      test2 = test1;
      test1 = nums[i];
      continue;
    }
    if ((nums[i] > test2) && (nums[i] < test1)) {
      test2 = nums[i];
    }
  }
return test2;
};