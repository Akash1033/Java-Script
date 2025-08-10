function sayMyName(){
    console.log("Akash");
}

// sayMyName()

// function addTwoNumbers (num1 , num2){
//     console.log(num1+num2);
  
// }
function addTwoNumbers (num1 , num2){
    // let result = num1 + num2
    // return result
    // console.log();
    return num1 + num2
}
addTwoNumbers(8,"a")
addTwoNumbers(8, null)
const result = addTwoNumbers(8, 5);
// console.log(result);

function loginUserMessage(username = "Akash"){
    if (username === undefined) {
        console.log("plz enter a Username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Akash"))
// console.log(loginUserMessage("aman"))


function calculateCartPrice(val1 , val2 ,...num1){
        return num1
}

console.log(calculateCartPrice(200,400,600));

const user = {
    username : "Akash",
    price : 199
}

function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and Price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "Akash",
    price  : 2000
})


const mynewArr = [200,40,5001,54656]

function returnArrValue(getArray){
    return getArray[1]
}

// console.log(returnArrValue(mynewArr) );
console.log(returnArrValue([2000,50,150,800]) );
