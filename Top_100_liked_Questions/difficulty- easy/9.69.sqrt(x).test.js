/* 
69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python. 

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

const mySqrt = function (x) {
  if (x < 2) return x;
  let result = 0;
  let start = 1;
  let end = x / 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqr = mid * mid;
    if (sqr == x) return mid;
    else if (sqr < x) {
      start = mid + 1;
      result = mid;
    } else end = mid - 1;
  }

  return result;
};

describe('Sqrt', () => {
  test('Ex-1', () => {
    expect(mySqrt(4)).toEqual(2);
  });

  test('Ex-2', () => {
    expect(mySqrt(8)).toEqual(2);
  });
});
