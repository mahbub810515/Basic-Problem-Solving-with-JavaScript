function verifyCartTotal(itemPrices, displayedTotal){
    if(!Array.isArray(itemPrices)){
        return "Invalid";
    }
    if(typeof displayedTotal !=="number"){
        return "Invalid";
    }
    let totalPrice=0;
    for(itemPrice of itemPrices){{
        if(typeof itemPrice !=='number'){
            return "Invalid";
        }
        totalPrice+=itemPrice;       
    }}
    if(totalPrice==displayedTotal){
        return true
    }return false;

}

let itemPrices=[100,50,40];
let displayedTotal=190;
let result = verifyCartTotal(itemPrices, displayedTotal);
console.log(result);
 itemPrices=[250,400,150];
 displayedTotal=805;
 result = verifyCartTotal(itemPrices, displayedTotal);
console.log(result);