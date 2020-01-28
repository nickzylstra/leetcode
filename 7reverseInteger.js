/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let result = 0;

  let i = 1;
  while (x !== 0) {
    const digit = (x % (10 ** i)) / (10 ** (i - 1));
    result = result * 10 + digit;
    x -= digit * (10 ** (i - 1));

    i += 1;
  }

  return Math.abs(result) > 2147483648 ? 0 : result;
};

console.log(reverse(123), '=== 321');
console.log(reverse(-123), '=== -321');
console.log(reverse(120), '=== 21');
console.log(reverse(1534236469), '=== 0');
