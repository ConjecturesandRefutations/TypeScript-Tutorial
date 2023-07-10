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
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(3) -> This will not work because wrong type
var numbers = [10, 20, 30, 40];
//numbers.push('bob'); -> wrong type
var mixed = ['ken', 4, 'chun-li', 8, 9]; //-> now we can add either strings or numbers to this array.
mixed.push('ryu');
mixed.push(10);
//objects
var ninja = {
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
var character;
var age;
var isLoggedIn;
age = 30;
//arrays
var ninjas = [];
ninjas.push('alfie');
//union types
var mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(20);
mixedTwo.push(false);
var uid;
uid = 'hello';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = [];
var ninjaTwo;
ninjaTwo = {
    name: 'Alfie',
    age: 20,
    beltColour: 'black'
};
//any types
var ageTwo = 25;
ageTwo = true;
ageTwo = 'hello';
// Be wary of using 'any' types. Essentially they remove a lot of the benefits of TypeScript, effectively becoming like JavaScript.
var mixedThree = [];
mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
//console.log(mixedThree);
var ninjaThree;
ninjaThree = { name: 'Alfie', age: 30 };
//console.log(ninjaThree);
