/* 
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] != s[r]) return false;
    l++;
    r--;
  }

  return true;
};

describe('Valid Palindrome', () => {
  test('Ex-1', () => {
    const res = isPalindrome('A man, a plan, a canal: Panama');
    expect(res).toEqual(true);
  });

  test('Ex-2', () => {
    const res = isPalindrome('race a car');
    expect(res).toEqual(false);
  });
});
