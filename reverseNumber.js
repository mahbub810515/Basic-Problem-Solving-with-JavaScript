// Input: a number
// Output: the number with digits reversed
// Returns: a number
 
function reverseNumber(num) {
  let str = num.toString();
  // TODO: build the reversed string, then convert back to a number
  //first convert string into array uning split method
   let newStr= str.split('')
   //reverse the array
   .reverse()
   //convert the array into string
   .join("");
    
  return newStr
 
}
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7
console.log(reverseNumber(7531));    // Expected: 1357
