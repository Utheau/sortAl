import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

// new instance for strings
const charsCollection = new CharactersCollection('SfsWdapowq');
// new instance for numbers
const numbersCollection = new NumbersCollection([1, 23, 88, -545, -8, -0.2, 0.254, 0.25, 0.2]);
// new instance for linkedlist
const linkedList = new LinkedList()

// add values to linkedlist
linkedList.add(400);
linkedList.add(-1);
linkedList.add(12);
linkedList.add(4442 );
linkedList.add(-8329);

// call sort method for different types of array through Abstract Sorter class

numbersCollection.sort();
charsCollection.sort();
linkedList.sort();

// print out values
console.log(numbersCollection.data);
console.log(charsCollection.data);
linkedList.print();