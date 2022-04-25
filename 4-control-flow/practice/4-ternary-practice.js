// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called CreditCardNum, set it equal to a fake credit card string-number
const CreditCardNum = '4567890076554433'

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
const last4SS= 5555
// Initialize a variable called userId, set it equal to a fake user ID

const userId = "DavidHon"
// Initialize a variable called password, set it equal to a fake password
let password = "danc34mylyfe!"

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password

let inputId = "DavidHon"
let inputPass = "danc34mylyfe!"

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass

let idCheck = userId === inputId ? CreditCardNum + last4SS :"incorrect username or id"
console.log(idCheck)
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'

let theta = 50;
let beta = 45;
let result = theta > beta ? "You've entered a new dimension." : "You have failed, try again."
console.log(result);