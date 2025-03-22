/* 
412. Fizz Buzz
Solved
Easy
Topics
Companies
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

var fizzBuzz = function (n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let str = '';

    if (i % 3 === 0) str += 'Fizz';
    if (i % 5 === 0) str += 'Buzz';

    if (str === '') str += i;
    res.push(str);
  }

  return res;
};

describe('Fizz Buzz', () => {
  test('Ex-1', () => {
    const result = fizzBuzz(3);
    expect(result).toEqual(['1', '2', 'Fizz']);
  });

  test('Ex-2', () => {
    const result = fizzBuzz(5);
    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  test('Ex-3', () => {
    const result = fizzBuzz(15);
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
