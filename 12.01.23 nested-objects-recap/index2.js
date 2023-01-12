let users = [];

//function to create a new object 
const createUser = (id, firstname, name) => {
    //creating the user object
    let user = {
        id:id,
        firstname:firstname,
        name:name
    }
    //returning that user object
    return user;
}

//for -loop
for(let i=0; i<100;i++){
    users.push(createUser(i,`John${i}`,`Test${i}`));
}

console.log("users array is: ", users);