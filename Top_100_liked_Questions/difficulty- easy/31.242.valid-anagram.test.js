/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false 
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sourceMap = {};
  for (let i in s) {
    if (!sourceMap[s[i]]) sourceMap[s[i]] = 0;
    sourceMap[s[i]]++;
  }

  console.log(sourceMap);
  for (let i in t) {
    if (!sourceMap[t[i]] || sourceMap[t[i]] === 0) return false;
    sourceMap[t[i]]--;
    console.log(t[i], sourceMap);
  }

  return true;
};

describe('Valid Anagram', () => {
  test('Ex-1', () => {
    const s = 'anagram',
      t = 'nagaram';
    let result = isAnagram(s, t);
    expect(result).toEqual(true);
  });
});
