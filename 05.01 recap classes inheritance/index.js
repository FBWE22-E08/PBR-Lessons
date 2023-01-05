//webstore which allows us to manage products q
//We an create orders (user can make an order)
//Photographs, Clothing 

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

class ClothingItem extends Product{
    constructor(title, description, price, color, size){
        //super refers to our parent /superclass
        super(title,description, price);
        this.color = color;
        this.size = size;
    }
}

class Photograph extends Product {
    constructor(title, description, price, resolution){
        super(title,description,price);
        this.resolution = resolution;
    }
}

class Order {
    constructor(){
        this.products = [];
    }

    addProduct(product){
        //invoking static method IsProduct no need to create a class instance. 
        if(!ValidationHelper.IsProduct(product)){
            console.log("This is not a valid product. please provide a valid product!");
            return; //empty return --> leave the function
        }

        this.products.push(product);
    }
}

//START OF THE PROGRAM 
const myOrder = new Order();

myOrder.addProduct(new Product("Postcard","Postcard with amazing picture on it.",3.5));
myOrder.addProduct(new Photograph("Picture","Amazing landscape picture.",3.5,"1920x1080"));
myOrder.addProduct(new ClothingItem("Sweater","Warm sweater ideal for winter.",45,"blue","M"));

console.table(myOrder.products);