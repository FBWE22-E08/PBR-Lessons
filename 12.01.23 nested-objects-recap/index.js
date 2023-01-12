//describing the object 
let user = {
    name:"Test",
    firstName:"John",
    hobbies:['Golf', 'Programming'],
    address: {
        street:"Teststreet",
        number:42,
        postalCode:10115,
        city:"Berlin",
        country:"DE"
    },
    //function part of the object
    addHobby(hobby){
       //using this we have access to properties of that object.
       this.hobbies.push(hobby); 
    }
}
console.log(`Hello my name is:${user.firstName} ${user.name}`);
// console.log(user.hobbies);
console.log("I live in: ");
console.log(user.address.city);
user.addHobby('Karate');
user.addHobby('Football');
// console.log(user.hobbies);
console.log(`I have ${user.hobbies.length} hobbies`);
for(let hobby of user.hobbies){
    console.log(`* ${hobby}`);
}

//adding new property to the object
user.middleName = "Frank";
console.log(user);

//access keys using [] notation
console.log(user.address);
console.log(user["address"]);

//assigning key to variable and using variable to access property on object
let key = "address";
console.log(user[key]);