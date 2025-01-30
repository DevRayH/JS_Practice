/* First stack in JS */

function node_maker(value) {
  let node = {
    value: value,
    next: null,
  };
  return node;
}

let stack = {
  top: null,
  size: 0,

  push: function (value) {
    let node = node_maker(value);
    if (this.top == null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  },

  pop() {
    let node = this.top;
    this.top = this.top.next;
    node.next = null;
    this.size--;
    return node;
  },
};

function fill(list, value, stack) {
  if (value < list.length) {
    stack.push(list[value]);
    fill(list, value + 1, stack);
  }
}

function empty(stack) {
  if (stack.size > 0) {
    console.log(stack.pop().value);
    empty(stack);
  }
}

let my_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

fill(my_arr, 0, stack);
empty(stack);
