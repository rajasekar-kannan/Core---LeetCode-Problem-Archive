const linkedListToArray = (head) => {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

module.exports = { linkedListToArray };
