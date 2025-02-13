// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("c");
//     console.log("h");
//     console.log("i");
//     console.log("n");    
// }

// sayMyName()

function addTwoNumbers(number1, number2) {  
    // console.log('Sachin');  // Ensure explicit conversion
    return number1 +(number2); // Return the sum
}

// const result = addTwoNumbers(3, 5);  
// console.log("result:", result);


function loginUserMessage(username ="sam") {
    if(username=== undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;  // Use template literal correctly
}

const result = loginUserMessage("Sachin");
console.log(result);  // Output: Sachin just logged in

