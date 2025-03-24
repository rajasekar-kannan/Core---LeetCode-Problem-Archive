/* 
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head. 

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

const { linkedListToArray } = require('../utils/function');

var removeNthFromEnd = function (head, n) {
  let root = new Node(0);
  root.next = head;
  let front = root;
  let back = root;

  while (n >= 0) {
    front = front.next;
    n--;
  }

  while (front) {
    front = front.next;
    back = back.next;
  }

  back.next = back.next.next;
  return root.next;
};

function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

describe('Remove Nth Node From End of List', () => {
  test('Ex-1', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const updatedHead = removeNthFromEnd(node1, 2);

    expect(linkedListToArray(updatedHead)).toEqual([1, 2, 3, 5]);
  });

  test('Ex-2', () => {
    let node1 = new Node(1);
    const updatedHead = removeNthFromEnd(node1, 1);
    expect(linkedListToArray(updatedHead)).toEqual([]);
  });

  test('Ex-3', () => {
    let node1 = new Node(1);
    let node2 = new Node(2);

    node1.next = node2;
    const updatedHead = removeNthFromEnd(node1, 1);
    expect(linkedListToArray(updatedHead)).toEqual([1]);
  });
});
