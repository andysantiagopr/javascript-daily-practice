/* https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) */ 


//Solution// 

function solution(number) {
  let mul3 = 0;
  let mul5 = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      mul3 += i;
    }
  }

  for (let i = 0; i < number; i++) {
    if (i % 5 === 0 && i % 3 !== 0) { // prevent double counting
      mul5 += i;
    }
  }

  return mul3 + mul5;
}
