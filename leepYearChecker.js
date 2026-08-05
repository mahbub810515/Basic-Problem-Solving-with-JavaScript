
function isLeepYear(year){
    if(year%4 ===0){
        if(year%100 !==0 || year%400 ===0){
            return true;
        }
    }else{
        return false;
    }
}

let result = isLeepYear(2000);
console.log(result)
result = isLeepYear(2005);
console.log(result)
result = isLeepYear(2010);
console.log(result)