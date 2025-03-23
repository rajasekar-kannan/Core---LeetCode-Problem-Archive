/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb" */

var longestPalindrome = function (s) {
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandFromCenter(s, i, i);
    const evenPalindrome = expandFromCenter(s, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
};

const expandFromCenter = (str, left, right) => {
  let i = 0;

  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }

  return str.slice(1 + left - i, right + i);
};

describe('Longest Palindromic Substring', () => {
  test('Ex-1', () => {
    expect(longestPalindrome('babad')).toEqual('bab'); // or aba
  });

  test('Ex-1', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb'); // or aba
  });
});
