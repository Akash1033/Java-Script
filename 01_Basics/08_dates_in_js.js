// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let mynewDate  = new Date(2025 , 0  , 2, 5 )
let mynewDate  = new Date("2005-02-01")
console.log(mynewDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mynewDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() +1);



// `${newDate.getDay()} and the time is `
 newDate.toLocaleString('default' , {
    calendar :" Animation",
    
})
