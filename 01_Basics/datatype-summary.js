// Primitive
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = ('123')
const anutherId =Symbol('123')

// console.log(id ===anutherId);
const BigNumber = 213521464218765666n


// Reference (Non primitive)
// Array, Object, functions
const heros = ["Shaktiman","naagraj","doga"];

let myobj ={
    name:"Sachin",
    age :25,
}
const myFunction =function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#

//  Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "Sachin";
let anotherName = myYoutubeName;
anotherName = "Rahul";

console.log(myYoutubeName);
console.log(anotherName);

let userone = {
    email :"user@google.com",
    upi :"user@okhdfcbank"
}

let usertwo = userone;
usertwo.email = "Sachin@google.com"
console.log(userone.email);
console.log(usertwo.email);