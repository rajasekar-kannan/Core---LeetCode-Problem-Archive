/* 
191. Number of 1 Bits

Write a function that takes the binary representation of a positive integer and returns the number of 
set bits
 it has (also known as the Hamming weight).

Example 1:
Input: n = 11
Output: 3
Explanation:
The input binary string 1011 has a total of three set bits.

Example 2:
Input: n = 128
Output: 1
Explanation:
The input binary string 10000000 has a total of one set bit.

Example 3:
Input: n = 2147483645
Output: 30
Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
 */

var hammingWeight = function (int) {
  const str = int.toString(2); // pass a radix parameter of 2 to keep it in base 2.
  let count = 0;
  for (let char of str) {
    if (char === '1') count++;
  }
  return count;
};

describe('Number of 1 Bits', () => {
  test('EX-1', () => {
    expect(hammingWeight(11)).toEqual(3);
  });

  test('EX-1', () => {
    expect(hammingWeight(128)).toEqual(1);
  });

  test('EX-1', () => {
    expect(hammingWeight(2147483645)).toEqual(30);
  });
});
