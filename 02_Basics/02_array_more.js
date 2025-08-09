const marvel_heros = ['thor' , 'ironman', 'spiderman']
const Home_heros = ['Akash' , 'Aman', 'Manu']

// marvel_heros.push(Home_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHero = marvel_heros.concat(Home_heros)
// console.log((allHero));


const allnewHeros = [... marvel_heros, ...Home_heros]
console.log(allnewHeros);


const anotherArr = [1,2,3, [4,5,6], 7,[8,9,[9]]]

const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))
console.log(Array.from({name : "Akash"})); // interesting array question



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));
