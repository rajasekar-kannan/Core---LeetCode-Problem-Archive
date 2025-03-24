/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let hash = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    hash[rightChar] = hash[rightChar] + 1 || 1;

    while (hash[rightChar] > 1) {
      let leftChar = s[windowStart];

      if (hash[leftChar] > 1) {
        hash[leftChar]--;
      } else {
        delete hash[leftChar];
      }

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
};

describe('Longest Substring Without Repeating Characters', () => {
  test('Ex-1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  test('Ex-1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });
  test('Ex-1', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
});
