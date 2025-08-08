const name = "Akash"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ("AkashVohra")

console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
console.log(gameName.split('h'));

const newString =  gameName.substring(0,3)
console.log(newString);

const anotherId = gameName.slice(-8,4)
console.log(anotherId);

const newStringOne = "  Aman    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.abc.in/";
console.log(url.replace("abc", "akash"));
 
console.log(url.includes('akash'));
console.log(url.includes('abc'));


console.log(url.endsWith('/'));
