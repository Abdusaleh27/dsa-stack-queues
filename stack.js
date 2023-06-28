/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    // when pushing first time
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return;
    }

    let first = this.first;
    this.first = newNode;
    this.first.next = first;
    this.size += 1;
    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Empty Stack!");
    let first = this.first;
    let next = first.next;
    if (next) {
      this.first = next;
      this.size -= 1;
      return first.val;
    }

    //if only only 1 item
    this.first = null;
    this.last = null;
    this.size = 0;
    return first.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) throw new Error("Empty Stack!");
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
