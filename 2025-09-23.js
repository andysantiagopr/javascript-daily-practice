/*
# Codewars Daily Challenge Log

- **Challenge**: [Two numbers have at least two bits in common?](https://www.codewars.com/kata/58a5aeb893b79949eb0000f1/solutions/javascript?filter=all&sort=best_practice&invalids=false)  
- **Date Completed**: 23 September 2025  
- **Difficulty**: (not specified)  
- **Profile**: https://www.codewars.com/users/andysantiagopr  

## Solution (JavaScript)
```javascript
function sharedBits(a, b) {

  let maxLength = Math.max(a.toString(2).length, b.toString(2).length); 

  let binaryA = a.toString(2).padStart(maxLength, "0").split('');
  let binaryB = b.toString(2).padStart(maxLength, "0").split('');
    
  let count = 0; 
  
  for (let i = 0; i < binaryA.length; i++) {
    if (binaryA[i] === "1" && binaryB[i] === "1") {
      count += 1;
    } 
  }
  
  return count > 1; 
}

sharedBits(43, 77);   // true   (43=101011, 77=1001101 → two shared 1-bits)
sharedBits(10, 5);    // false  (10=1010, 5=0101 → no position with both 1)
sharedBits(7, 11);    // true   (7=00111, 11=01011 → two shared 1-bits)
sharedBits(1, 1);     // false  (only one shared 1-bit)
sharedBits(0, 0);     // false  (no 1-bits at all)

*/