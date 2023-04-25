const { Product } = require("./Product.js");

class Cart {
    constructor(products, total){
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }
    removeProduct(i){
        let product = this.products[i];
        this.products.splice(i,1);
        this.total -= product.price;
    }
}

const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

const myCart = new Cart();
console.log(myCart.addProduct(strawberries));
myCart.addProduct(mangos);
myCart.products; // [Product { ... }, Product { ... }]
myCart.total; // 8

myCart.removeProduct(1);
myCart.products; // [Product { ... }]
myCart.total; // 5

module.exports = {
    Cart
}