class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val: T) {
    if (this.head === null) {
      this.head = this.tail = new Node(val);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(val);
      if (oldTail) {
        oldTail.next = this.tail;
      }
    }
  }

  addFirst(val: T) {
    if (this.head === null) {
      this.head = this.tail = new Node(val);
    } else {
      let oldHead = this.head;
      this.head = new Node(val);
      this.head.next = oldHead;
    }
  }

  deleteLast() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (current.next?.next !== null) {
      if (current.next === null) {
        break;
      }
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  deleteFirst() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    this.head = current.next;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    let nextNode;
    while (current !== null) {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
  compare(obj1: any, obj2: any): boolean {
    if (obj1.value === obj2.value) return true;
    return false;
  }

  search(val: T): number {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (this.compare(current.val, val)) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  display(): T[] {
    const list: T[] = [];
    let current = this.head;
    while (current !== null) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }
}
