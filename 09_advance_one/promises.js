// const promiseOne = new Promise(function(resolve , reject) {
//     // Do an Async task
//     // DB calls , cryptogrpahy , network calls
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })



// new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         console.log('Async Task 2');
//         resolve()
        
//     },6000)
// }).then(()=> {
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(()=> {
//        resolve({username : "Chai" , age : 18})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username : "Akash" , email : "akash@gmail.com"})
        }else{
            reject('ERROR : Something went Wrong ')
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);    
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The Promise is either resolved or not "))

const promiseFive = new Promise((resolve , reject)=> {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username : "Akash" , email : "akash@gmail.com"})
        }else{
            reject('ERROR : Something went Wrong ')
        }
    },1000)
})

async function consumeFive() {
   try {
    const response =  await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumeFive()