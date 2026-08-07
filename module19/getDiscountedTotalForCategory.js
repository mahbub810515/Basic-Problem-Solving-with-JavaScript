const getDiscountedTotalForCategory = (products, category) => {
    let availableProduct = products
        .filter((product) => product.category === category)
        .map((product) => product.price -(product.price*0.1))
        .reduce((accumulator, element) => accumulator + element, 0)

    return availableProduct;
}
products = [
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Notebook", category: "stationery", price: 60 }
]
let category = "stationery"

let result = getDiscountedTotalForCategory(products, category);
console.log(result);