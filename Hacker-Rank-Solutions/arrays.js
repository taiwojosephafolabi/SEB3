function getSecondLargest(nums) {
  let i = 0;
  while (i < ((nums.length)-1)) {
      let test1 = nums[i];
      let test2 = nums[i+1]
      if(test2 < test1) {
          return test2
      }
      else {
          i++;
      }
  }
}
