function analyzeEmailDomain(text){
    let words = text.split(" ");
    let emailCounter=0;
    let longestDomain="";
    for(word of words){
        if(word.includes("@")){
            let emailDomainName=(word.split("@")[1]);            
            if(longestDomain.length<emailDomainName.length){
                longestDomain=emailDomainName;               
            }
            emailCounter++;            
        }
    }
   return { emailCount: emailCounter, longestDomain }
    

}
let text="Contact support@gmail.com admin@yahoo.com info@programminghero.com"
let result = analyzeEmailDomain(text);
console.log(result)