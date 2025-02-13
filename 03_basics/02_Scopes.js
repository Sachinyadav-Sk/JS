// let a =10
// const b = 20
// var c = 30  // Avoid using var
// console.log(a,b,c);  // Output: 10 20 30


if (true) {
    let a = 40
    const b = 50
    var c = 60
    // console.log(a,b,c);  // Output: 40 50 60
}
// console.log(a); 
// console.log(b);
// console.log(c);


function One (){
    const username = "Sachin"

    function Two(){
        const website = "sachin.com"
        // console.log(username);
    }
    // console.log(website);

    Two()
}

One()


if (true) {
    const username = "Sachin";
if (true) {
    const website = "sachin.com";
    // console.log(username);
}
// console.log(website);

}

// console.log(username);

// ++++++++++++++++++++++++++++++ interting ++++++++++++++++++++++++++++++++
 function addone(num) {
return num + 1;
 }
    function addtwo(num) {
    return num + 2;
    }