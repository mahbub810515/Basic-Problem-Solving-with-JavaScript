function verifyCartTotal(itemPrices, displayedTotal){
    let totalPrice=0;
    for(itemPrice of itemPrices){{
        totalPrice+=itemPrice;
        console.log(itemPrice)
    }}
    if(totalPrice==displayedTotal){
        return true
    }
    console.log(totalPrice)

}
let itemPrices=[100,50,40];
let displayedTotal=190;
let result = verifyCartTotal(itemPrices, displayedTotal);
console.log(result)