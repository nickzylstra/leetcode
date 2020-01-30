/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
// const moveChar = (str, startIdx, endIdx) => (
//   startIdx < endIdx
//     ? str.substring(0, startIdx) + str.substring(startIdx + 1, endIdx + 1) + str.charAt(startIdx) + str.substring(endIdx + 1)
//     : str.substring(0, endIdx) + str.charAt(startIdx) + str.substring(endIdx + 1, startIdx) + str.substring(startIdx));

// const reorgChar = (str, charIdx) => {
//   const char = str.charAt(charIdx);

//   let curIdx = charIdx + 1 === str.length ? 0 : charIdx + 1;
//   while (curIdx !== charIdx) {
//     const curChar = str.charAt(curIdx);
//     const nextIdx = curIdx + 1;
//     const nextChar = str.charAt(nextIdx) || null;
//     if (char !== curChar && char !== nextChar) {
//       return moveChar(str, charIdx, curIdx);
//     }

//     curIdx = nextIdx;
//   }

//   return '';
// };

// /**
//  * @param {string} S
//  * @return {string}
//  */
// const reorganizeString = function (S) {
//   let output = S;

//   for (let i = 0; i < output.length - 1; i += 1) {
//     const char = output.charAt(i);
//     const nextChar = output.charAt(i + 1);
//     if (char === nextChar) {
//       output = reorgChar(output, i + 1);
//       i -= 1;
//     }
//   }

//   return output;
// };
class QItem {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PQ {
  constructor(comparator) {
    this._items = [];
    this._comparator = comparator;
  }

  enqueue(val, priority) {
    const item = new QItem(val, priority);

  }

  dequeue() {
    return this.isEmpty() ? null : this._items.shift();
  }

  rear() {
    return this.isEmpty() ? null : this._items[this._items.length - 1];
  }

  size() {
    return this._items.length;
  }

  isEmpty() {
    return this.size() > 0;
  }
}

const reorganizeString = function reorganizeString(S) {

};

console.log(`"${reorganizeString('aab')}"`, '=== "aba"');
console.log(`"${reorganizeString('aaab')}"`, '=== ""');
console.log(`"${reorganizeString('aabaccca')}"`, '=== "abacacac"');
