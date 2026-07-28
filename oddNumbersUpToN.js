// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
 
function getOddNumbers(n) {
  let odds = [];
  // TODO: write your loop here
  for(let i =0; i<=n; i++){
    if(i%2!=0){
        odds.push(i)
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]
console.log(getOddNumbers(20));
// Expected: [1, 3, 5, 7, 9,11,13,15,17,19]
