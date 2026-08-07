const findProductByName=(products,name)=>{
    let availableProduct= products.find((product)=>{
        if(product.name===name){
            return product;
        }
    })
    return availableProduct;
}
let products=[
    { name: "Pen", stock: 5 }, 
    { name: "Bag", stock: 0 }, 
    { name: "Notebook", stock: 2}
] 
let name="Bag";
let result= findProductByName(products,name);
console.log(result);