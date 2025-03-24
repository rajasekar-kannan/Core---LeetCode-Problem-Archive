/* 
29. Divide Two Integers
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
*/

var divide = function (dividend, divisor) {
  if (divisor === 0) return 0;
  if (divisor === 1) return dividend;

  let dd = Math.abs(dividend);
  let dv = Math.abs(divisor);
  let sign = Math.sign(dividend) * Math.sign(divisor);

  let res = 0;
  let tmp = dv;
  while (dd >= dv) {
    let i = 1;
    tmp = dv;

    while (tmp <= dd >> 1) {
      tmp = tmp << 1;
      i = i << 1;
    }

    dd = dd - tmp;
    res += i;
  }

  res = sign * res;
  res = Math.min(Math.pow(2, 31) - 1, Math.max(res, Math.pow(-2, 31)));
  return res;
};

describe('Divide Two Integers', () => {
  test('Ex-1', () => {
    const res = divide(10, 3);
    expect(res).toEqual(3);
  });

  test('Ex-2', () => {
    const res = divide(7, -3);
    expect(res).toEqual(-2);
  });
});
