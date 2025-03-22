/* 
387. First Unique Character in a String
Solved
Easy
Topics
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1 
*/

var firstUniqChar = function (s) {
  for (let char of s) {
    let firstIndex = s.indexOf(char);
    if (firstIndex === s.lastIndexOf(char)) return firstIndex;
  }

  return -1;
};


describe('First Unique Character in a String', () => {
  test('Ex-1', () => {
    const result = firstUniqChar("leetcode");
    expect(result).toEqual(0);
  });

  test('Ex-2', () => {
    const result = firstUniqChar("loveleetcode");
    expect(result).toEqual(2);
  });

  test('Ex-3', () => {
    const result = firstUniqChar("aabb");
    expect(result).toEqual(-1);
  });
});