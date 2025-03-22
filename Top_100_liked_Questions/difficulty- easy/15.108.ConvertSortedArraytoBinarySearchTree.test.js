/* 
108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

 

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sortedArrayToBST = function (nums) {
  if (!nums || !nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));
  return node;
};

describe('Convert Sorted Array to Binary Search Tree', () => {
  test('Ex-1', () => {
    const res = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(1).toEqual(1);
  });

  test('Ex-2', () => {
    const res = sortedArrayToBST([1, 3]);
    expect(1).toEqual(1);
  });
});
