import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([1, 23, 88, -545, -8, -0.2, 0.254, 0.25, 0.2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);