const myNum = [1,2,3]

// const total = myNum.reduce( function (acc,CurVal){
//     console.log(`acc :${acc} and Curval : ${CurVal}`);
    
//     return acc + CurVal
// }, 0)


const total = myNum.reduce( (acc , curr) => acc + curr ,0)
console.log(total);


const shoppingCard = [
    {
        itemName : "js Course",
        price : 299
    },
    {
        itemName : "py Course",
        price : 299
    },
    {
        itemName : "APP Course",
        price : 299
    },
    {
        itemName : "java Course",
        price : 295
    },
]

const billPayment = shoppingCard.reduce( (acc,item) =>acc + item.price, 0 )
console.log(billPayment);
