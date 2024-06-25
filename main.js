import { LinkedList } from './LinkedList.js';

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log('Size:', list.size());
console.log('Head:', list.head());
console.log('Tail:', list.tail());
console.log('At index 2:', list.at(2));
console.log('Pop:', list.pop());
console.log('Contains 20:', list.contains(20));
console.log('Find 20:', list.find(20));
console.log('ToString:', list.toString());

list.insertAt(15, 2);
console.log('After Insert At 2:', list.toString());

list.removeAt(2);
console.log('After Remove At 2:', list.toString());
