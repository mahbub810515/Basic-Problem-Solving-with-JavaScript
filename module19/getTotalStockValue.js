const getTotalStockValue=(products)=>{
    let availableProduct= products
    .map((product)=> product.price*product.stock)
    .reduce((accumulator,element)=> accumulator+element,0)

    return availableProduct;
}
let products=[
    { name: "Pen", price:20, stock: 5 }, 
    { name: "Bag",price:200, stock: 4 }, 
    { name: "Notebook",price:120, stock: 5}
] 

let result= getTotalStockValue(products);
console.log(result);