/**
 * @param {string} s
 * @return {number}
 */


const lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  let longLen = 0;
  const curChars = new Map();

  for (let i = 0, j = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (curChars.has(char)) {
      j = Math.max(curChars.get(char), j);
    }
    longLen = Math.max(longLen, i - j + 1);
    curChars.set(char, i + 1);
  }

  return longLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'), '=== 3');
console.log(lengthOfLongestSubstring('bbbbbb'), '=== 1');
console.log(lengthOfLongestSubstring('pwwkew'), '=== 3');
console.log(lengthOfLongestSubstring('aab'), '=== 2');
console.log(lengthOfLongestSubstring('dvdf'), '=== 3');
console.log(lengthOfLongestSubstring('advdaf'), '=== 4');
console.log(lengthOfLongestSubstring(' '), '=== 1');
