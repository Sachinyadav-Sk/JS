const name = "Sachin";
const repoCount =50

// console.log(name + repoCount + " Value");

// console.log(`Hello my Name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Sachin')

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)
// console.log(newString)


const anotherString = gameName.slice(-8,3)
console.log(anotherString);
const newStringOne = "   Sachin  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sachin.com/sachin%20yadav"

console.log(url.replace('%20','_'))
console.log(url.includes('sachin'))
