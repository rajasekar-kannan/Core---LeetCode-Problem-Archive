/* 
350. Intersection of Two Arrays II
Solved
Easy
Topics
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted. 
*/

var intersect = function (nums1, nums2) {
  let hash = [];

  for (let key of nums1) {
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  }

  let result = [];
  for (let key of nums2) {
    if (hash[key] > 0) {
      hash[key]--;
      result.push(key);
    }
  }

  return result;
};

describe('Intersection of Two Arrays II', () => {
  test('Ex-1', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const result = intersect(nums1, nums2);
    expect(result).toEqual([2, 2]);
  });

  test('Ex-2', () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const result = intersect(nums1, nums2);
    expect(result).toEqual([9, 4]);
  });
});
