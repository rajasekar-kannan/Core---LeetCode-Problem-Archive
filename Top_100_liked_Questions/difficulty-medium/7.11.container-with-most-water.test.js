/* 
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  // Formula for find volumn => l * b
  while (left < right) {
    console.log(left, right);
    const bredth = right - left;
    let minLength = Math.min(height[left], height[right]);
    let volumn = minLength * bredth;
    max = volumn > max ? volumn : max;

    height[left] < height[right] ? left++ : right--;
  }

  return max;
};

describe('Container With Most Water', () => {
  test('Ex-1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  test('Ex-1', () => {
    expect(maxArea([1, 1])).toEqual(1);
  });
});
