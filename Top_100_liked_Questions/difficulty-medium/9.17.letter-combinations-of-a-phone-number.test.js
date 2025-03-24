/* 
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. 

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = (digits) => {
  let result = [];
  if (!digits.length) return [];

  const permute = (str, index) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }

    for (let char of map[digits[index]]) {
      permute(str + char, index + 1);
    }
  };

  permute('', 0);
  console.log(result);

  return result;
};

// console.log(letterCombinations('23'));
describe('Letter Combinations of a Phone Number', () => {
  test('Ex-1', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  test('Ex-2', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  test('Ex-3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
