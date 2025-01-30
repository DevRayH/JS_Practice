/* First stab at a sort list in javascript */

node_maker = function (value) {
  let node = {
    value: value,
    next: null,
    prev: null,
  };
  return node;
};

let list = {
  head: null,
  tail: null,
  has_nodes: false,

  push: function (value) {
    if (this.has_nodes == false) {
      this.head = node_maker(value);
      this.tail = this.head;
      this.has_nodes = true;
    } else {
      this.recursive_add(this.head, value);
    }
  },

  recursive_add: function (node, value) {
    if (node.value > value) {
      if (node.next == null) {
        node.next = node_maker(value);
        node.next.prev = node;
      } else {
        this.recursive_add(node.next, value);
      }
    } else {
      loc_node = node_maker(value);
      loc_node.next = node;
      if (node.prev == null) {
        this.head = loc_node;
      } else {
        node.prev.next = loc_node;
        loc_node.prev = node.prev;
      }
      node.prev = loc_node;
    }
  },

  pop: function () {
    let ret_node = this.head;
    this.head = this.head.next;
    if (this.head != null) {
      this.head.prev = null;
      ret_node.next = null;
    } else {
      this.tail = null;
      this.has_nodes = false;
    }
    return ret_node;
  },
};

fill = function (arr, list) {
  for (let i = 0; i < arr.length; i++) {
    list.push(arr[i]);
  }
};

empty = function (list) {
  if (list.has_nodes == true) {
    let ret_ob = list.pop();
    console.log(ret_ob.value);
    empty(list);
  }
};

let loc_arr = [1, 5, 8, 4, 7, 2, 0, 9];

fill(loc_arr, list);
empty(list);
