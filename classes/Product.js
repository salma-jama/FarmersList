class Product {
    constructor(name, price, description, inStock){
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }
    display(){
        let symbol = '$';
        return `Name: ${this.name}, Price: ${symbol}${this.price}, Description: ${this.description}`;
    }
}
module.exports = {
    Product
}