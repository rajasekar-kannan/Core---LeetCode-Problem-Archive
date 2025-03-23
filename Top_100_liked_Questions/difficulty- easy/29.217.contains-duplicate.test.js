/* 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

var containsDuplicate = function (nums) {
  let hash = {};

  for (let num of nums) {
    if (hash[num]) return true;
    else hash[num] = 1;
  }

  return false;
};

describe('Contains Duplicate', () => {
  test('Ex-1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });

  test('Ex-1', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
