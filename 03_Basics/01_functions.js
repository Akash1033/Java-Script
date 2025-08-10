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

console.log(loginUserMessage("Akash"))
console.log(loginUserMessage("aman"))
