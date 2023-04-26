const { Customer } = require("./Customer.js");
const { Cart } = require("./Cart.js");
class Auth {
    constructor() {
      this.customers = [];
    }
  
    register(name, email, shippingAddress) {
      const customer = new Customer(name, email, shippingAddress);
      this.customers.push(customer);
      return customer;
    }
  
    login(email) {
        for (let i = 0; i < this.customers.length; i++) {
          const customer = this.customers[i];
          if (customer.email === email) {
            return customer;
          }
        }
        return null;
    }   
}

let auth = new Auth();
auth.register("Kaiya", "Kaiya@example.com", '121 Main St');
auth.register("Nina", "Nina@example.com", '22 Broadway St');

console.log(auth.login("Kaiya@example.com"));
/*
{ name: 'Kaiya', email: 'jKaiya@example.com', shippingAddress: '121 Main St' }
}
*/

console.log(auth.login("benny@example.com")); // null


module.exports = {
    Auth
}