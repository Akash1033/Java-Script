// let myName = "Akash     "

// console.log(myName.trueLength);



let myheros = [ "Akash" , "Aman"]

let heroPower = {
    Akash : "mind",
    Aman  : "body",

    getSpiderPower : function (){
        console.log(`Akash power is ${this.Akash}`);
    }
}

Object.prototype.sayAkash = function(){
    console.log(`Akash is present`);
}

// heroPower.sayAkash()
myheros.sayAkash()


Array.prototype.sayAman = function(){
    console.log(`Aman is present`)
}
myheros.sayAman()
// heroPower.sayAman()


//INHERiTANCE

const teacher = {
    makeVideo : true
}

const teacherSupport = {
    isAvialble : true
}
teacher.__proto__ = teacherSupport



// Modern Syntax
// Object.setPrototypeOf(teacherSupport, teacher)



let anotherString = "Akash         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
    
}
anotherString.trueLength()