// primitive Datatypes (7 types)
// String , Number , Boolean , null , undefined , symbol , bigint


const score = 100
const scoreValue  = 20.0

 const isLoggedIn = false 
  const outsideTemp = null
   let userEmail;

    const id = Symbol("123")
     const anotherId = Symbol("123")


     console.log(id === anotherId);
     console.log(anotherId);

     const bigNumber = 7879414794554646n
     console.log(typeof bigNumber);
     

     //  Reference (Non-Primitive)

     // Array , Objects , Functions 

     const heros = [ "Shaktimaan", "Nagraj" , "Doga"];
     let myObj= {
        name : "Akash",
        age : 32
     }
     console.log(myObj);
     console.log(heros);
     

     const myFunction = function(){
        console.log(myFunction);
        
     }

     myFunction()