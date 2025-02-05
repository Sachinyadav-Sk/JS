// Date

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2025,0, 23)
// let myCreatedDate = new Date (2025,0, 23, 5,3)
// let myCreatedDate = new Date ("2025,01,15")
let myCreatedDate = new Date ("1,15,2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday:"long",

})