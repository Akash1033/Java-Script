// for of 
// Array specific loops

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
    
}

const greeting = "Hello World"

for (const num of greeting) {
    // console.log(`greet is ${num}`);
    
}

// Maps
const map = new Map()
map.set('IN', "india")
map.set('USA', "United States of america")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" ,value);  
}

const myObject = {
    game1 : 'PUBG',
    'game2' : 'FREE FIRE'
}

// for (const [key , value] of myObject) {
//     console.log(key , ":-" , value);  
// }

