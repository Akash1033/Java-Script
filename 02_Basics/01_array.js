// Array

const myArr = [0,1,2,3, true , "hitesh"]

// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[10]);
// console.log(myArr[11]);

const  newArr = new Array("Akash" , "Aman", "Manu")
// console.log(newArr);


// Array Methods

myArr.push(false)
myArr.push('akash')
myArr.push(77)
myArr.pop()
myArr.pop()
myArr.pop()

// myArr.unshift('Start')
myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(true));
// console.log(myArr.indexOf('Kalu'));


const  mynewArr = myArr.join()

// console.log(myArr);
// console.log(mynewArr);
// console.log(typeof mynewArr);



// Slice  , Splice 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr);


