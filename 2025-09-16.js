
/* Alternative Solution to Capitals First — https://www.codewars.com/kata/55c353487fe3cc80660001d4 */

function capitalsFirst(str){
	let words = str.split(' ');
  let upper = words.filter(function(x) { return x.charAt(0).match(/[A-Z]/) });
  let lower = words.filter(function(x) { return x.charAt(0).match(/[a-z]/) });
  return upper.concat(lower).join(' ');
}

/*Practice exercise

Practice Exercise: Filtering Arrays

You are given this array of objects representing users: */

const users = [
  { name: "Alice", age: 17, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 32, active: true },
  { name: "Diana", age: 15, active: false },
  { name: "Eve", age: 40, active: true }
];

/* Tasks (using .filter()):

Get all users who are 18 or older.
➝ Expected: Bob, Charlie, Eve

Get all users who are active.
➝ Expected: Alice, Charlie, Eve

Get all users who are active AND older than 30.
➝ Expected: Charlie, Eve

(Bonus) Get all users whose name starts with "A".
➝ Expected: Alice

Example Starter Code (Task 1) */

let adults = users.filter(user => user.age >= 18);
console.log(adults);

let active = users.filter(user => user.active === true);
console.log(active);

let olderThan30 = users.filter(user => active && user.age > 30);
console.log(olderThan30);

let initialA = users.filter(user => user.name[0] === "A");
console.log(initialA);


/* Write a function that takes a string of words and numbers separated by spaces.
Rearrange the string so that all numbers come first, followed by all words.

Example
numbersFirst("apple 42 banana 7 orange 100 pear")


👉 Should return:

"42 7 100 apple banana orange pear"

🔎 Hints (same pattern as your capitalsFirst)

Use str.split(' ') to get an array of items.

Use .filter() with a regex:

One filter for numbers (/^[0-9]/)

One filter for words (/^[a-zA-Z]/)

Combine arrays with .concat() or spread ([...numbers, ...words]).

Use .join(' ') to return the string. */ 

function numbersFirst(str) {
  let arr = str.split(' ');
  let numberRegex = /^[0-9]+$/;
  let lowerRegex = /[a-z]/;

  let numbers = arr.filter(function(x) {
    return numberRegex.test(x);
  });

  let lowerCase = arr.filter(function(x) {
    return lowerRegex.test(x.charAt(0));
  });

  return numbers.concat(lowerCase).join(' ');

}

console.log(numbersFirst("apple 42 banana 7 orange 100 pear"));