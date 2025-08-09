// Singleton

// object literals

// Object.create


const mySym = Symbol("key1")

const jsUser = {
    name : "Akash",
    "Roll Number" : 2302713,
    [mySym] : "mykey1",
    age : 20,
    location : "ludhiana",
    email : "akashvohra98@gmail.com",
    lastLogin : ["Monday" , " Wednesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Roll Number"]);
console.log(jsUser[mySym]);


jsUser.email = "aman@gc.com"
// Object.freeze(jsUser)
jsUser.email = "akash@.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User  ${this.name} i know you are  ${this.age}`);
    
}
console.log(jsUser.greetingTwo());
