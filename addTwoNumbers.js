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
  let factor = 1;
  let node1 = l1;
  let num1 = 0;
  while (node1) {
    num1 += factor * node1.val;
    factor *= 10;
    node1 = node1.next;
  }

  factor = 1;
  let node2 = l2;
  let num2 = 0;
  while (node2) {
    num2 += factor * node2.val;
    factor *= 10;
    node2 = node2.next;
  }

  const sum = num1 + num2;
  // const l3 = new ListNode();
  return sum;
};


const l1 = new ListNode(2);
l1.add(4);
l1.add(3);
const l2 = new ListNode(5);
l2.add(6);
l2.add(4);
console.log(addTwoNumbers(l1, l2));

l2.add(4);
console.log(addTwoNumbers(l1, l2));
