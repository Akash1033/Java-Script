const { useReducer } = require("react");

function mul5(num){
    return num * 5
}

mul5.power = 2
mul5.age= "Akash"

console.log(mul5(2));
console.log(mul5.age);
console.log(mul5.prototype);


function user(username , score){
    this.username = username
    this.score = score
}

user.prototype.increment = function(){
    this.score++
}


const chai = new user("Chai", 25)


chai.increment()