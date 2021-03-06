/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    let node = this;
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(val);
  }
}


const addTwoNumbers = function addTwoNumbers(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  const l3 = new ListNode();
  let node3 = l3;
  while (node1 || node2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (node1) {
      val1 = node1.val;
      node1 = node1.next;
    }
    if (node2) {
      val2 = node2.val;
      node2 = node2.next;
    }
    let digit = val1 + val2 + carry;
    if (digit > 9) {
      digit %= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    node3.next = new ListNode(digit);

    node3 = node3.next;
  }

  return l3.next;
};


const l1 = new ListNode(2);
l1.add(4);
l1.add(3);
const l2 = new ListNode(5);
l2.add(6);
l2.add(4);
const res1 = addTwoNumbers(l1, l2);
console.log(res1);

l2.add(4);
const res2 = addTwoNumbers(l1, l2);
console.log(res2);
console.log(res2.next.next);

l1.add(6);
const res3 = addTwoNumbers(l1, l2);
console.log(res3);
console.log(res3.next.next);

const l3 = new ListNode(1);
const l4 = new ListNode(9);
l4.add(9);
console.log(addTwoNumbers(l3, l4));
