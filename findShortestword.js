// Input: a sentence (string) 
// Output: the shortest word 
// Returns: a string 
function findShortestWord(sentence) { 
let words = sentence.split(" "); 
let shortest = words[0]; 
// TODO: loop through words and compare lengths 
for(let word of words){
   if(word.length >= shortest.length){
        continue;
   }else{
    shortest=word;
   }
}
return shortest; 
} 
console.log(findShortestWord("JavaScript is a fun language")); // 
Expected: "a" 