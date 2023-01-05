//imperative approach 
function countDownFrom(number){
    for(let i=number; i>0; i--){
        console.log(i);
    }
}

countDownFrom(10);
//recursive approach
function countDownFromRecursive(number){
    //if number is 0 it exits the function
    if(number === 0){
        return;
    }
    console.log(number);
    //function calls itself but with number -1 
    countDownFromRecursive(number - 1);
}

countDownFromRecursive(10);

//Example recursive function using factorial:
//3! = 3 * 2 * 1 
//0! = 1
//6! = 6 * 5 * 4 * 3 * 2 * 1
//n! = n * (n - 1)
function factorial(x){
    if(x===0){ //base case (called until reaches x = 0)
        return 1;
    } else {
        //example how it's called
        //3 * factorial(3-1) = 3 * factorial(2)
        //3 * 2 * factorial(2-1) = 3 * 2 * 1
        //3 * 2 * 1 * factorial(1-1) = 3 * 2 * 1 * 1 = 6
        return x * factorial(x - 1);
    }
}

//generate result for factor of 6
let result = factorial(6);
console.log("The factorial is", result);