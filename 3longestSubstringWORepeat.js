/**
 * @param {string} s
 * @return {number}
 */


const lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  let longLen = 0;
  const curChars = new Map();
  const queue = [];

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);
    queue.push(char);

    if (curChars.has(char)) {
      let queueHead;
      do {
        queueHead = queue.shift();
        curChars.delete(queueHead);
      } while (queueHead !== char);
    } else if (queue.length > longLen) {
      longLen = queue.length;
    }
    curChars.set(char, i);
  }

  return longLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'), '=== 3');
console.log(lengthOfLongestSubstring('bbbbbb'), '=== 1');
console.log(lengthOfLongestSubstring('pwwkew'), '=== 3');
console.log(lengthOfLongestSubstring('aab'), '=== 2');
console.log(lengthOfLongestSubstring('dvdf'), '=== 3');
