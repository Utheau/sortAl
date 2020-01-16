"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
// new instance for strings
var charsCollection = new CharactersCollection_1.CharactersCollection('SfsWdapowq');
// new instance for numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 23, 88, -545, -8, -0.2, 0.254, 0.25, 0.2]);
// new instance for linkedlist
var linkedList = new LinkedList_1.LinkedList();
// add values to linkedlist
linkedList.add(400);
linkedList.add(-1);
linkedList.add(12);
linkedList.add(4442);
linkedList.add(-8329);
// call sort method for different types of array through Abstract Sorter class
numbersCollection.sort();
charsCollection.sort();
linkedList.sort();
// print out values
console.log(numbersCollection.data);
console.log(charsCollection.data);
linkedList.print();
