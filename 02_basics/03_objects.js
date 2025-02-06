// Singleton
// Object.create

// Object literals
const JsUser ={
    name : "Sachin",
    "full name":"Sachin yadav",
    age :23,
    location: "Kannauj",
    email : "sachin@google.com",
    isLoggedIn: false,
    lastLoginDays :["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);


JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
