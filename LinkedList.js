import { Node } from './Node1.js';

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let currentNode = this.headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (count === index) return currentNode;
      count++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const popValue = this.headNode.value;
      this.headNode = null;
      return popValue;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    const popValue = currentNode.nextNode.value;
    currentNode.nextNode = null;
    return popValue;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let str = '';
    let currentNode = this.headNode;
    while (currentNode) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    str += 'null';
    return str;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const prevNode = this.at(index - 1);
    if (!prevNode) return;
    prevNode.nextNode = new Node(value, prevNode.nextNode);
  }

  removeAt(index) {
    if (index === 0) {
      if (this.headNode) {
        this.headNode = this.headNode.nextNode;
      }
      return;
    }
    const prevNode = this.at(index - 1);
    if (!prevNode || !prevNode.nextNode) return;
    prevNode.nextNode = prevNode.nextNode.nextNode;
  }
}
