const moveChar = (str, startIdx, endIdx) => (
  startIdx < endIdx
    ? str.substring(0, startIdx) + str.substring(startIdx + 1, endIdx) + str.charAt(startIdx) + str.substring(endIdx)
    : str.substring(0, endIdx) + str.charAt(startIdx) + str.substring(endIdx + 1, startIdx) + str.substring(startIdx));

const reorgChar = (str, charIdx) => {
  const char = str.charAt(charIdx);

  let curIdx = charIdx + 1 === str.length ? 0 : charIdx + 1;
  while (curIdx !== charIdx) {
    const curChar = str.charAt(curIdx);
    const nextIdx = curIdx + 1;
    const nextChar = str.charAt(nextIdx) || null;
    if (char !== curChar && char !== nextChar) {
      return moveChar(str, charIdx, curIdx);
    }

    curIdx = nextIdx;
  }

  return '';
};

/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function (S) {
  let output = S;

  for (let i = 0; i < output.length - 1; i += 1) {
    const char = output.charAt(i);
    const nextChar = output.charAt(i + 1);
    if (char === nextChar) {
      output = reorgChar(output, i);
    }
  }

  return output;
};

console.log(`"${reorganizeString('aab')}"`, '=== "aba"');
console.log(`"${reorganizeString('aaab')}"`, '=== ""');
console.log(`"${reorganizeString('aabaccca')}"`, '=== "cabacacac"');
