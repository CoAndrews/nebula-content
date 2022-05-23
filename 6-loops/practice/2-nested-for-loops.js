// // 1.   Loop over each letter of a string
// //      If a letter is a vowel log it to the console
// const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
// for (let i = 0; i < famousQuote.length; i++){
//     console.log(`${famousQuote[i]}`);
// }
// // 2.   Loop over each letter of a string
// //      If a letter is a capital, log it to the console
// const vowels = ["a", "e", "i", "o", "u"]


//   }
// 3.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter a in it, log it to the console

const names = ['eric', 'jordan', 'kelly', 'daniel']
for (let i = 0; i < names.length; i++){
  for (let j = 0; j < names [i].length; j++){
    if (names[i][j] === "a"){
      console.log(names[i])
  }
  }
}
// 4.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
let myArrStr = ['This','is','an','array','of','strings'] 
let newArrStr = []

for (let i = 0; i < myArrStr.length; i+= 2){
  for (let j = 0; j < myArrStr.length; j+= 2){
    myArrStr[i][j] = `${myArrStr[i][j]}`.toUpperCase();
    newArrStr.push(myArrStr[i])
  }
}
console.log(newArrStr)

//   for (let i=0; i < famousQuote.length; i++){
//       if (`${famousQuote[i]}`=== `${famousQuote[i]}`.toUpperCase()){
//           console.log(`${famousQuote[i]}`)
//       }


// 5.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]