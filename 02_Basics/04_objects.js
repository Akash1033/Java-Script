// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIN = false


// console.log(tinderUser);


const regularUser =  {
    email : "abc@gmail.com",
    fullname : {
        UserFullname  : {
            Firstname  : "Akash",
            Lastname  : "Vohra"
        }
    }
}

// console.log(regularUser.fullname?.UserFullname.Lastname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

const User = [
    {
        name : "Aman",
        email : "abc.gmail"
    }, {

    },{

    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));



