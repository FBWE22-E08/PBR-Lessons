//webstore which allows us to manage products 
//We an create orders (user can make an order)
//Photographs, Clothing 
//-----------------------------------------------
class ValidationHelper {
    //static means we can access this method without instantiating the object. 
    //we can directly access it on the class.
    static IsProduct(product){
        return (product instanceof Product); //returns true or false if it's instance or not an instance
    }
}

//parent class 
class Product {
   constructor(title, description, price){
    this.title = title; 
    this.description = description;
    this.price = price;
   }

   printProductLine(){
    return `${this.title} - ${this.description} - €${this.price}`;
   }
}
//sub-class or child class of Product
//use the word extend to inherit Product
class ClothingItem extends Product{
    constructor(title, description, price, color, size){
        //super refers to our parent /superclass
        super(title,description, price);
        this.color = color;
        this.size = size;
    }

    printProductLine(){
       return `${this.title} - ${this.description} - €${this.price} - CLOTHING`;
    }
}

//sub-class or child class of Product
//use the word extend to inherit Product
class Photograph extends Product {
    constructor(title, description, price, resolution){
        super(title,description,price);
        this.resolution = resolution;
    }
}

//Order class where we keep our order details
class Order {
    constructor(){
        this.products = [];
    }
    //add a product method.
    addProduct(product){
        //invoking static method IsProduct no need to create a class instance. 
        //STATIC = directly accessible
        if(!ValidationHelper.IsProduct(product)){
            console.log("This is not a valid product. please provide a valid product!");
            return; //empty return --> leave the function
        }

        this.products.push(product);
    }

    calcTotalPrice(){
        //use reducer to calculate the sum of prices
        return this.products.reduce((acc,curr) => acc += curr.price,0);
    }
    //prints a receipt
    printReceipt(){
        console.log("THANK YOU FOR YOUR ORDER");
        console.log("-----------------------------");
        //for..of 
        //will go through each product in this.products
        for(let prod of this.products){
            console.log(prod.printProductLine()); //this is a method delcared on our Product class (the superclass)
            console.log("==============================");
        }
        
        console.log("TOTAL PRICE: €", this.calcTotalPrice());
    }
}

//------------------------
//  START OF THE PROGRAM 
//------------------------
const myOrder = new Order();
//add products to the order
myOrder.addProduct(new Product("Postcard","Postcard with amazing picture on it.",3.5));
myOrder.addProduct(new Photograph("Picture","Amazing landscape picture.",3.5,"1920x1080"));
myOrder.addProduct(new ClothingItem("Sweater","Warm sweater ideal for winter.",45,"blue","M"));
myOrder.addProduct(new ClothingItem("Sweater 2","Warm sweater ideal for winter.",80,"blue","M"));

//show the products
console.table(myOrder.products);

//print the receipt
myOrder.printReceipt();