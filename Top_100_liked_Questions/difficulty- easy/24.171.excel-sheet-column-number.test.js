/* 
171. Excel Sheet Column Number

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701 
*/

var titleToNumber = function (columnTitle) {
  let result = 0;
  let length = columnTitle.length;
  
  for (let i = 0; i < length; i++) {
    result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
    console.log(result);
  }
  return result;
};

describe('Excel Sheet Column Number', () => {
  test('EX-1', () => {
    expect(titleToNumber('A')).toEqual(1);
  });

  test('EX-2', () => {
    expect(titleToNumber('AB')).toEqual(28);
  });

  test('EX-3', () => {
    expect(titleToNumber('ZY')).toEqual(701);
  });
});
