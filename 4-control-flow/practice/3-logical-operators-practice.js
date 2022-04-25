let x = 42;
let y = 11;

// // If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'
if (x === 42 | y === 42) {
    console.log("I see you've found the ultimate answer to life, the universe and everything.")
}
// Save your name to a variable called fName
const fName = "Chanel"
// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
if (fName.length < 10) {
    console.log(`You'll need more characters!`)
}
else if(fName.length > 10){
    console.log("I see you've got enough characters!")
}
// Otherwise log, 'I see you've got enough characters!' to the console. 



// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
 const month = 11
if (month > 3 && month < 12) {
    console.log ("winter is coming")
}
// Create two variables a & b initialized as numbers
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'
let a = 20
let b = 4

if (a > b){
    console.log("a is greater than b")
}
else if(a < b){
    console.log("a is less than b")
}
else if(a = b) {
    console.log("a is equal to b")
}

// if(a > b) {
//     console.log("a is greater than b")
// }
// else if(a < b) {
//     console.log("a is less than b")
// }
// else {
// console.log('a is equal to b')
// }