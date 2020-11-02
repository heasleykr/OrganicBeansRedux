// ES6 common topics

//Mapping example
var numbers = [1, 2, 3, 4];

//Expects mapping function inside.
var result = numbers.map((num) => {
  //multiply each number by 2
  return num * 2;
});

console.log(result);

/************* Object destructoring **********/
var { x, y, z, s } = numbers; //less used

// You are creating an object  based on the values in the array

/************** End Object Destructoring *************/

//mapping w/ objects
var nmes = [
  { first: "Nick", last: "Brewer" },
  { first: "Erick", last: "Arroyo" },
  { first: "Katelynn", last: "Heasley" },
];

var fullNames = names.map((person) => {
  return person.first + " " + person.last;
});

//Filter example

var prices = [45, 234, 78, 123, 21];

var res1 = prices.filter((price) => {
  //do the magic
  //return prices over 100
  if (price >= 100) {
    return true;
  }
  return false;
});

/*********** Spread Operator ********** */

var copy = numbers; // this to works to copy

//BUT IN JS there's only ONE array in memory with TWO references
//So when you update one, you update the other. It's just two names.

//We have to CLONE it. Both of these do the same thing. '...'
var copy2 = [numbers[0], numbers[1], numbers[2], numbers[3]];
var copy3 = [...numbers];
