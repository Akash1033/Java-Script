class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);   
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(` A new Course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('chai', "abc@gamail.com", "dnfhjfv")
chai.addcourse()

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
