/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function convert(s, numRows) {
  const len = s.length;
  if (len === 0) return '';
  if (numRows === 1) return s;
  // handle numRows = 0
  // handle numRows > len
  const rowQueues = new Map();
  for (let row = 0; row < numRows; row += 1) {
    rowQueues.set(row, []);
  }

  for (let i = 0, dir = -1, row = 0; i < len; i += 1) {
    const char = s.charAt(i);
    rowQueues.get(row).push(char);
    if (i % (numRows - 1) === 0) { dir *= -1; }
    row += dir;
  }

  let output = '';
  for (let row = 0; row < numRows; row += 1) {
    const rowQueue = rowQueues.get(row);
    const qLen = rowQueue.length;
    for (let i = 0; i < qLen; i += 1) {
      output += rowQueue.shift();
    }
  }

  return output;
};

console.log(convert('PAYPALISHIRING', 3), '=== PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4), '=== PINALSIGYAHRPI');
console.log(convert('AB', 1), '=== AB');
