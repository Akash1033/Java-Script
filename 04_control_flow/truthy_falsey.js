const userEmail = []

if (userEmail) {
    console.log(`got user Email`);
    
}else  {
    console.log("Dont have userEmail");
    
}


// Truthy Values
// '0' , [] , 'false' ," " , {} , function(){}

//falsy Values
// false , 0, -0 , BigInt 0n , "" ,null , undefined , NaN


// if (userEmail.length === 0) {
//     console.log(`Array is Empty`);

// }

const emptyObject = {}

// if (Object.keys(emptyObject).length ===0 ) {
//     console.log("Object is Empty");
    
// }


// Nullish  Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// console.log(val1);


//Ternary Operator

// condtion ? true :false

const coldCoffee  = 400
coldCoffee >300 ? console.log(`poor Person  can't Afford`) : console.log('anyone can Afford');


