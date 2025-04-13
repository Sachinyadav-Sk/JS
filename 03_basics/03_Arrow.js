const user = {
    username: 'Sachin',
    price : 100,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);
    },
    }
// user.welcomeMessage()
// user.username ="Sachin Yadav"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'Sachin Yadav'
//     console.log(this);
// }
// chai()

// const chai = ()     => {
// let username = 'Sachin Yadav'
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => 
//      ({username: 'Sachin Yadav'});

// const addTwo = (num1,num2) =>  num1+num2

const addTwo = (num1,num2) =>  (num1+num2)



console.log(addTwo(2,3));    