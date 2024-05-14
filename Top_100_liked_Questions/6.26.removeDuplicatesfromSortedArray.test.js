/* 
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

var removeDuplicates = function (nums) {
  let i = 0;

  for (const key in nums) {
    if (nums[i] !== nums[key]) {
      nums[++i] = nums[key];
    }
  }

  return ++i;
};

describe('Remove Duplicates from Sorted Array', () => {
  test('Ex-1', () => {
    const array = [1, 1, 2];
    const res = removeDuplicates(array);
    expect(res).toEqual(2);
    expect(array).toEqual([1, 2, 2]);
  });

  test('Ex-2', () => {
    const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const res = removeDuplicates(array);
    expect(res).toEqual(5);
    expect(array).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
  });
});
