import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const charsCollection = new CharactersCollection('SfsWdapowq');
const numbersCollection = new NumbersCollection([1, 23, 88, -545, -8, -0.2, 0.254, 0.25, 0.2]);

const sorterNum = new Sorter(numbersCollection);
const sorterChars = new Sorter(charsCollection);

sorterNum.sort();
sorterChars.sort();

console.log(numbersCollection.data);
console.log(charsCollection.data);