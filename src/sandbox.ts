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

let numbers = [10, 20, 30, 40]

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
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

//arrays
let ninjas: string[] = [];

ninjas.push('alfie');

//union types
let mixedTwo: (string|number|boolean)[] = [];

mixedTwo.push('hello');
mixedTwo.push(20);
mixedTwo.push(false);

let uid: string|number;
uid = 'hello';
uid = 123;

//objects

let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};
ninjaOne = [];

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string;
};

ninjaTwo = {
  name: 'Alfie',
  age: 20,
  beltColour: 'black'
}

//***ANY TYPES***

let ageTwo: any = 25;

ageTwo = true;
ageTwo = 'hello';

// Be wary of using 'any' types. Essentially they remove a lot of the benefits of TypeScript, effectively becoming like JavaScript.

let mixedThree: any[] = [];

mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
//console.log(mixedThree);

let ninjaThree: { name: any, age: any };

ninjaThree = { name: 'Alfie', age: 30 };

//console.log(ninjaThree);

//***FUNCTION BASICS***

/* let greet = () => {
  console.log('hello, world');
}

greet = 'Hello' - Not allowed, because we implicitly declared that `greet` is a function

*/

let greet: Function;

greet = () => {
  console.log('hello, again')
} // This is allowed because we have already explicitly declared that `greet` is a function

const add = (a: number, b: number, c?: number | string) => {
  console.log(a+b);
  console.log(c);
} 

add(5,10);

const minus=(a: number, b: number) => {
  return a+b;
}

let result = minus(10,7);


//***TYPE ALIASES***

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greetTwo = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

//***FUNCTION SIGNATURES ***/


//example 1
let greetThree: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

//example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) =>{
  if (action === 'add'){
    return numOne + numTwo
  } else {
    return numOne - numTwo;
  }
}

//example 3
let logDetailsTwo: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetailsTwo = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}