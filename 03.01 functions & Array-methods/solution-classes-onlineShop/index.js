class Product {
  constructor(name, price){
this.name = name
this.price = price
  }

  toText(){
    return `${this.name} ${this.price} € in total. ${this.containedVAT()} (16%).`
  }

  containedVAT(){
  const taxIncluded = this.price * 0.16
  return `${taxIncluded}  € VAT incl.` 
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

console.log(shoes)

console.log(tracksuit.toText()) // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
console.log(tracksuit.containedVAT()) // 24.00 € VAT incl.

// const myObj = {
// name: 'Adidas tracksuit',
// price: 150
// }


class Cart{
    constructor(){
        this.products = []
    }

    addProduct(shoppedProduct){
        if(shoppedProduct instanceof Product){
            this.products.push(shoppedProduct)
            return `Your shopping cart now contains ${this.products.length} products`
        }else{
            return `This is not available in our shop!`
        }
    }

   getProductInfoCart(){
   return this.products.forEach((item) => console.log(item.toText()))
}
// this.products = [{name: 'Adidas', price: 55}, {name: 'Adidgfdgas', price: 5675}, {name: ''Adighgdas', price: 5675}, ...]
getTotalItemsPrice(){
return this.products.reduce((acc, curr) =>   acc +=  curr.price    , 0 ).toFixed(2)
}

}

const cart = new Cart()
console.log(cart.addProduct("potato") )// This is not available in our shop!
console.log(cart.addProduct(tracksuit) )// Your shopping cart now contains 1 products
console.log(cart.addProduct(shoes)) // Your shopping cart now contains 2 products
console.log(cart.addProduct(socks)) // Your shopping cart now contains 3 products

cart.getProductInfoCart()
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// Puma tracksuit 85.99 € in total. 13.76 € VAT incl. (16%).

console.log(cart.getTotalItemsPrice())

// The total for 3 items in your cart amounts to 240.98 €.

