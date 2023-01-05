//example of closure 1. 
function makeFunc(){
    //function has access to name
    const name = 'Mozilla';

    function displayName(){
        console.log(name);
    }

    return displayName;
}

//store the returned variable
const myFunc = makeFunc();
//notice how the function has access to the name variable
myFunc();

//Closure = returns another function
//returns a function with counter
function getCounter(){
    let counter = 0; 

    return function(){
        return counter++;
    }
}
//get the counter function and store it in the variable
let count = getCounter();
//notice how with each count the counter does +1
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

//Same can be achieved using an object
//example
let countObject = {
    counter:0,
    count : function() {
        //this.counter++;
        return this.counter++;
    }
}

console.log(countObject.count());
console.log(countObject.count());
console.log(countObject.count());
console.log(countObject.count());
console.log(countObject.count());

//EXAMPLE using classes
//same can be achieved using classes
class Counter {
    constructor(counter){
        this.counter = counter;
    }

    count(){
       return this.counter++;
    }
}

const counter = new Counter(0);

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());


//real-life case when you would like to change fontsize using a function.
function makeSizer(size){
    return function(){
        return `document.body.style.fontSize:${size}px`; //normally a command but in string form now 
    }
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);

console.log(size12());
console.log(size14());
