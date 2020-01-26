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
  while (node1 && node2) {
    let digit = node1.val + node2.val + carry;
    if (digit > 9) {
      digit %= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    node3.next = new ListNode(digit);

    node1 = node1.next;
    node2 = node2.next;
    node3 = node3.next;
  }

  if (node1) {
    node3.val = node1.val;
    node3.next = node1.next;
  }
  if (node2) {
    node3.val = node2.val;
    node3.next = node2.next;
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
console.log(addTwoNumbers(l1, l2));
