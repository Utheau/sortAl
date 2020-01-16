import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}


export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void  {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
     }

     tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Not in index');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    throw new Error('Not in index');
  }

  compare(lxIndex: number, rxIndex: number): boolean {
    if (!this.head) {
      throw new Error('Empty list');
    }

    return this.at(lxIndex).data > this.at(rxIndex).data;
  }

  swap(lxIndex: number, rxIndex: number): void {
    const lxNode = this.at(lxIndex);
    const rxNode = this.at(rxIndex);

    const leftHand = lxNode.data;
    lxNode.data = rxNode.data;
    rxNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}