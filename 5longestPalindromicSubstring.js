/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function longestPalindrome(s) {
  let start = 0;
  let end = 0;

  for (let i = 1; i < s.length; i += 1) {
    
  }

  return s.substring(start, end);
};

console.log(longestPalindrome(''), '=== ');
console.log(longestPalindrome('b'), '=== b');
console.log(longestPalindrome('babad'), '=== bab');
console.log(longestPalindrome('cbb'), 'bb');
