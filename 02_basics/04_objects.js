// const tinderUser =new Object()

const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);
const regularUser ={
    email: "Some@gmail.com",
    fullname :{
        userfullname :{
            Fristname: "Sachin",
            Lastname :"Yadav"

        }
    }
}
// console.log(regularUser);


// +++++++++++++++  DeStructer in objects ++++++++++++++++++++++++++++++++++

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructer :"hitesh"

}

const {courseInstructer:instructer} = course
console.log(instructer)

// {
//     "name ": "Sachin",
//     "coursename" :"js in hinhi",
//     "price": "free"
// }