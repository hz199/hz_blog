/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
};
let arr = [3, 1, 2, 10, 1]

console.log(runningSum(arr))