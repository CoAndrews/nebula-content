// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
let benjamin = 0;
while (benjamin <= 30){
    console.log('the current index is ' + benjamin);
    benjamin++;
}

// //      Each loop it should log to the console 'the current index is _'

// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for (let i = 1; i <= 10; i+=2){
    console.log(" the current index is " + i)
}
// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const myFavCelebs = ["David Bowie", "Heart", "Prince", "Kate Bush", "Grace Jones"]
// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console

for (let i = 0; i < myFavCelebs.length; i ++){
    console.log(myFavCelebs[i]);
}

// 5.   Use the your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names

const celebFirstNames = [];
for (i = 0; i < myFavCelebs.length; i++){
    celebFirstNames.push(myFavCelebs[i].split(" ")[0])
}
console.log(celebFirstNames)

let ourArray = [];
for (let i = 0; i < 5; i++){
    if (i >2) break;
    ourArray.push(i)
}
console.log(ourArray);


// 6.   Use the your celebrity array for this question
//      Create a for loop which will output two separate arrays, one with only initials, one with only last names
initials = []
let names = []
for (let i = 0; i < myFavCelebs.length; i++){
     let spNames = myFavCelebs[i].split("")
     names.push(spNames);
 }
   



// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
const lNames = []
for (let i = 0; i < myFavCelebs.length; i++){
    lNames.push(myFavCelebs[i].split(" ")[1])
}
console.log(lNames)
// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for (let i = 0; i < myFavCelebs.length; i++){
    for (let j = 0; j < myFavCelebs[i].length; j++ ){
        if (myFavCelebs[i][j] === "a" || myFavCelebs[i][j] === "e" || myFavCelebs[i][j] === "i" || myFavCelebs[i][j] === "o" || myFavCelebs[i][j] === "u" ){
            console.log(myFavCelebs[i][j])
        }else continue;
    } 
}


for (let i = 0; i < myFavCelebs.length; i++){
    for (let j=0; j < myFavCelebs[i].length; j++){
        if (myFavCelebs[i][j] === myFavCelebs[i][j].toUpperCase()){
            console.log(myFavCelebs[i][j])
        }
    }
}
// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
//if is a comparison statement
// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop
let celebsCap = (myFavCelebs.join("-").toUpperCase())
console.log(celebsCap)

let imansHusband = myFavCelebs[0]

for (let i = 0; i < myFavCelebs.length; i++){
    if (myFavCelebs[i] === imansHusband){
        console.log(imansHusband)
        break;
    }
}
//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
