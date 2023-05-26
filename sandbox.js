var character = 'Alfie';
var age = 30;
var isBlackBelt = false;
//character = 20 gives an error because TypeScript is strict on not changing types
character = 'Bob';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
