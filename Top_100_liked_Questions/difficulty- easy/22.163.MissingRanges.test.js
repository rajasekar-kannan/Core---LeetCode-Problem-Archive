/* 
163. Missing Ranges

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.

A number x is considered missing if lower <= x <= upper and x is not in nums.

Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is within any of the ranges, and each missing number is within one of the ranges.

Each range [a,b] in the list should be represented as:

"a->b" if a != b
"a" if a == b

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [["2", "2"], ["4", "49"], ["51", "74"], ["76", "99"]
*/

const findMissingRanges = (number, lower, upper) => {
  const result = [];
  let previous = lower - 1;
  number.push(upper + 1);

  for (let i = 0; i < number.length; i++) {
    const [a, b] = [previous + 1, number[i] - 1];
    previous = number[i];

    if (a <= b) {
      result.push(a === b ? [a, a] : [a, b]);
    }
  }

  return result;
};

describe('Missing Ranges', () => {
  test('Ex-1', () => {
    const result = findMissingRanges([0, 1, 3, 50, 75], 0, 99);
    expect(result).toEqual([
      [2, 2],
      [4, 49],
      [51, 74],
      [76, 99],
    ]);
  });
});
