let getFormattedPrices=(prices)=>{
    return prices.map(price=>`$${price}`);
}
let prices= [100, 250, 75]
let result = getFormattedPrices(prices)
console.log(result)