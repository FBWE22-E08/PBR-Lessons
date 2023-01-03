//write a function that returns the sum of 2 parameters a and b

function sum(a,b){
    if(typeof(a)=== 'number' && typeof(b)=== 'number'){
        return a+b;
    }
    else{
        return 'please enter a valid number'
    }
}

console.log(sum('e',4))

const sum2 = (a,b) => a+b;

const sum3=(a,b)=>{
    if(!isNaN(a) && !isNaN(b)){
       return a+b;
    }
}

console.log(sum3(3,5))

//=================================================


const greetMessage=(x)=>{
   
    //console.log('hello '+ username);
    console.log(`hello ${x}`);
}


const greetUsers=(arr, callbackFunc)=>{
    arr.forEach((item)=>  callbackFunc(item))
}


greetMessage('John');

greetUsers(['John','Doe','apple'] , greetMessage );

//['John','Doe','apple','sima'].forEach(anyName =>  greetMessage(anyName) )


//==========================================================
// Array Methods

const myArr=[1,2,3,4,5];

//returns a string

console.log(myArr)

myArr.join('') //'12345' the opposite of .split() which turns a string into an array: 'hello'.split('') returns ['h','e','l','l','o']

//returns a boolean

myArr.includes(31)// returns false
myArr.some(item => item < 2 ) // returns true
myArr.every(item => item < 2 ) //returns false

//returns a number

myArr.length // return 5

//returns an index

myArr.indexOf(2) // returns 1
myArr.findIndex(el=> el ===3) // returns 2


//returns single value

myArr.at(2) // returns 3

const users = ['John', 'Doe','hi', 'apple']

users.find(item => item.includes('o')) // returns 'John'

myArr.find(item => item < 3) // returns 1



//return an array and don't mutate the original one

users.filter(item => item.includes('o')) // returns ['John','Doe']

const updatedArr = users.map(item => item +'-A') // returns [ 'John-A', 'Doe-A', 'hi-A', 'apple-A' ]

console.log(updatedArr)

users.slice(1) // returns [ 'Doe', 'hi', 'apple' ]

const newArr = users.concat('blue'); // returns [ 'John', 'Doe', 'hi', 'apple', 'blue' ]

console.log(newArr)


// return an array and mutate the original one

const Arr3 = users.splice(2, 2)

console.log(Arr3) //returns ['hi','apple']
console.log(users) // returns ['John','Doe']

users.pop() // returns ['John'] deletes the last item

const products = ['shoes','shirts','pants']

const Arr5 = products.shift() 

console.log(Arr5) // returns 'shoes'

console.log(products) // returns [ 'shirts', 'pants' ] deletes the first element

products.push('hats'); // returns [ 'shirts', 'pants', 'hats' ] adds an item to the end of the array

console.log(products)

products.unshift('cars') // returns [ 'cars', 'shirts', 'pants', 'hats' ] adds an item to the start of the array

console.log(products)

products.reverse() // [ 'hats', 'pants', 'shirts', 'cars' ]

console.log(products);


const numsArr = [33, 12, 4, 9, 102]

numsArr.sort((a,b)=> a-b); // returns [ 4, 9, 12, 33, 102 ]

console.log(numsArr);


// Array constructors

console.log(Array.from('hello')) // [ 'h', 'e', 'l', 'l', 'o' ]

Array.of(1,2,3) // [1,2,3]
console.log(Array.of(1,2,3))

//the string method 'split' to create an array

const makeArr = 'hello world again h i'.split(' ')

console.log(makeArr)

console.log('hello'.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]