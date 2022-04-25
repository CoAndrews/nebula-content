/*
https://github.com/Nebula-Academy/SEV8-Curriculum/blob/main/2-JavaScript-Basics/1-data-types-variables/3-strings/strings-assignments/1-string.assignment.js (*_*)UPDATE THIS LINK(*_*)

Push your code to github, reply with a link:
Steps:
`git add .`
`git commit -m"MESSAGE"`
`git push`
POST LINK

*/
 
// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
 
let greeting = "hello"
let farewell = "goodbye"
let concatenatedString = 
greeting +
farewell;

console.log(concatenatedString)

// 2. Save the substring "Friend" from the string "Hello Friend"
let myFriend = "Hello Friend"

console.log(myFriend.slice(5, 12));

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

const myStory = `${word17} ${word23} ${word18} ${word13} ${word21} ${word17} ${word23} ${word2} ${word10}`

console.log(myStory)

// 4. Given the string of your full name get your initials.

const myName = "Chanel Andrews"

const firstInit = myName[0]
const lastInit = myName[7]

console.log(firstInit, lastInit)
// 5. Get the 5th character from the following string: 'Hello World'
const oS ="Hello World"
const fifthInit = oS[4]
console.log(fifthInit)
// 6. Find the index of the dash from 'Coding-Time!'
let mySTR = "Coding-Time!"
console.log(mySTR.indexOf("-"))

// 7. Write code to grab the final letter from a any string.
let lastchar = mySTR[mySTR.length-1]

console.log(lastchar)
// 8. Write code to grab the first 3 letters from a string. 
let firstthree = mySTR[0,3]
console.log(firstthree)
// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let mySent = "This-is-a-sentence"
console.log(mySent.slice(0,4))

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;

console.log(one + two)
// Bonus Given the string of ANY first and last name get the initials. 
// This code needs to be dynamic, no matter the length of the names this code should work.
  // Ex: 
    // Brad Pitt: BP
    // Buzz Lightyear: BL 
    // Rick Grimes: RG