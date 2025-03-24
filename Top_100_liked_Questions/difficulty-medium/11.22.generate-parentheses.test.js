/* 
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (open, close, str) => {
    if (open === n && close === n) result.push(str);
    if (open < n) backtrack(open + 1, close, str + '(');
    if (open > close) backtrack(open, close + 1, str + ')');
  };

  backtrack(0, 0, '');
  return result;
};

describe(' Generate Parentheses', () => {
  test('Ex-1', () => {
    const res = generateParenthesis(3);
    expect(res).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });

  test('Ex-2', () => {
    const res = generateParenthesis(1);
    expect(res).toEqual(['()']);
  });
});
