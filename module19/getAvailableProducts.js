
const getAvailableProducts=(products)=>{
    let availableProduct= products.filter((product)=>{
        if(product.stock>1){
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
let result= getAvailableProducts(products);
console.log(result);