/* 
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let min = 0;
  let max = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }

    if (nums[mid] === target) {
      min = mid;
      max = mid;

      while (nums[min - 1] === target) min--;
      while (nums[max + 1] === target) max++;

      return [min, max];
    }
  }

  return [-1, -1];
};

describe('Find First and Last Position of Element in Sorted Array', () => {
  test('Ex-1', () => {
    const res = searchRange([5, 7, 7, 8, 8, 10], 8);
    expect(res).toEqual([3, 4]);
  });

  test('Ex-2', () => {
    const res = searchRange([5, 7, 7, 8, 8, 10], 6);
    expect(res).toEqual([-1, -1]);
  });

  test('Ex-2', () => {
    const res = searchRange([], 0);
    expect(res).toEqual([-1, -1]);
  });
});
