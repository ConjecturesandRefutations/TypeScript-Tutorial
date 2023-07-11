"use strict";
/* let character = 'Alfie'
let age = 30;
let isBlackBelt = false;

//character = 20 gives an error because TypeScript is strict on not changing types
character = 'Bob';

isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5)); */
//arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(3) -> This will not work because wrong type
let numbers = [10, 20, 30, 40];
//numbers.push('bob'); -> wrong type
let mixed = ['ken', 4, 'chun-li', 8, 9]; //-> now we can add either strings or numbers to this array.
mixed.push('ryu');
mixed.push(10);
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.age = '30' -> wrong type for object property 'age'
//ninja.skills = ['fighting', 'sneaking']; -> cannot add new property to the object
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
//explicit types
let character;
let age;
let isLoggedIn;
age = 30;
//arrays
let ninjas = [];
ninjas.push('alfie');
//union types
let mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(20);
mixedTwo.push(false);
let uid;
uid = 'hello';
uid = 123;
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];
let ninjaTwo;
ninjaTwo = {
    name: 'Alfie',
    age: 20,
    beltColour: 'black'
};
//***ANY TYPES***
let ageTwo = 25;
ageTwo = true;
ageTwo = 'hello';
// Be wary of using 'any' types. Essentially they remove a lot of the benefits of TypeScript, effectively becoming like JavaScript.
let mixedThree = [];
mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
//console.log(mixedThree);
let ninjaThree;
ninjaThree = { name: 'Alfie', age: 30 };
//console.log(ninjaThree);
//***FUNCTION BASICS***
/* let greet = () => {
  console.log('hello, world');
}

greet = 'Hello' - Not allowed, because we implicitly declared that `greet` is a function

*/
let greet;
greet = () => {
    console.log('hello, again');
}; // This is allowed because we have already explicitly declared that `greet` is a function
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetTwo = (user) => {
    console.log(`${user.name} says hello`);
};
