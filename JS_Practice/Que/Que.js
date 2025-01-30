/* My firt stab at a que in JS */

function node_maker(value) {
  let node = {
    value: value,
    next: null,
    prev: null,
  };
  return node;
}

let que = {
  head: null,
  tail: null,
  size: 0,

  push: function (value) {
    if (this.head == null) {
      this.head = node_maker(value);
      this.tail = this.head;
      this.size++;
    } else {
      let node = this.head;
      this.head = node_maker(value);
      this.head.next = node;
      node.prev = this.head;
      this.size++;
    }
  },

  pop: function () {
    if (this.tail != null) {
      let node = this.tail;

      this.tail = this.tail.prev;

      if (this.tail == null) {
        this.head = null;
      } else {
        this.tail.next = null;
        node.prev = null;
      }
      this.size--;
      return node;
    }
    return;
  },
};

function Fill(list, value, que) {
  if (value < list.length) {
    que.push(list[value]);
    Fill(list, value + 1, que);
  }
}

function Empty(que) {
  if (que.size > 0) {
    let loc_node = que.pop();
    console.log(loc_node.value);
    Empty(que);
  }
}

let my_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

Fill(my_arr, 0, que);
Empty(que);
