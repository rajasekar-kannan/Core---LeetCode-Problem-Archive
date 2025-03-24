/* 
7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

var reverse = function (x) {
  let num = Math.abs(x);

  let reversed = num.toString().split('').reverse().join('');
  reversed = Math.sign(x) * reversed;

  if (reversed < 10) {
    return Math.pow(-2, 31) > reversed ? 0 : reversed;
  } else {
    return Math.pow(2, 31) < reversed ? 0 : reversed;
  }
};

describe('Longest Palindromic Substring', () => {
  test('Ex-1', () => {
    expect(reverse(123)).toEqual(321);
  });

  test('Ex-1', () => {
    expect(reverse(-123)).toEqual(-321);
  });

  test('Ex-1', () => {
    expect(reverse(120)).toEqual(21);
  });
});
