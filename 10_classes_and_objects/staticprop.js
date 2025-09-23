class User{
    constructor(username){
        this.username =  username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }


}

const Akash = new User("Akash")
// console.log(Akash.createId());


class Teacher extends User{
    constructor(username,  email){
        super(username)
        this.email =email
    }
}

const aman = new Teacher("Aman" , "abc@gmail")
console.log(aman.createId());
