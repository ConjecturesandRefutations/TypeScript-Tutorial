let character = 'Alfie'
let age = 30;
let isBlackBelt = false;

//character = 20 gives an error because TypeScript is strict on not changing types
character = 'Bob';

isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI
} 

console.log(circ(7.5))