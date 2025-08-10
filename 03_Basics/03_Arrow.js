const user = {
    username : "Akash",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} ,  Welcome to Website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username ="Aman"
user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Aman"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
     let username = "Aman"
    console.log(this.username);
}

chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1 , num2) =>  num1 + num2 
// const addTwo = (num1 , num2) => ( num1 + num2 )
const addTwo = (num1 , num2) => ({ username : "hitesh"})

console.log(addTwo(3,4));


// const myArray = [2,5,8,6,7]
