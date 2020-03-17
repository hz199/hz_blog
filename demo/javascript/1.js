// 1. 用任意一种语言实现一个函数，判断一个给定整数数组中是否存在某两个元素之和恰好等于一个给定值 k，存在则返回 true，否则返回 false。
// 该函数的输入参数有两个，第一个参数为整数数组 nums，第二个参数为整数 k，返回值为布尔值。可以参考以下签名，写出实现。【要求时间复杂度为 O(n)，n 为数组长度】

var nums = [3, 5, 9, 6, 8]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = {}

  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]] !== undefined) {
      return [res[nums[i]], i]
    } else {
      res[target - nums[i]] = i
      console.log(res)
    }
      
  }
}

console.log(twoSum(nums, 9))