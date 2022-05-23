// // 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
let myloop1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < myloop1.length; i++){
    console.log(`'Current index'${myloop1[i]}`);
}
// //      Each loop it should log to the console the current index

// // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
const myloop2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
// //      Each loop it should log to the console the current index
for (let i = 0; i < myloop2.length; i+= 2){
    console.log(`'Current index'${myloop2[i]}`);
}

// // 3.   Create an array with all student names in it. 
const myClassmates = ["Odalis", "Chanel","Juan", "Aleisha", "Armani"]
// //      Loop over the array and log each student's name to the console.
for (let i = 0; i < myClassmates.length; i++){
    console.log(`'How tired are you'${myClassmates[i]}`);
}
// //      Inside the array declare an unrequired, but useful variable for 'currentStudent'


// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
       const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
       for (let i = 0; i < numArray.length; i ++){
        if (`${numArray[i]}` % 2 === 0){
            console.log(`${numArray[i]}`)
        }  
    }
// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers

for (let i = 0; i < numArray.length; i ++){
    if(`${numArray[i]}`% 2 != 0){
        console.log(`${numArray[i]}`)
    }
}

// 6.   Using the numArray and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers
const numArray1 = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
const positiveArr = [];
const negativeArr = [];

for (let i = 0; i < numArray1.length; i ++){
    if (`${numArray1[i]}` <= 0){
        console.log(`${negativeArr[i]}`)
    }else (console.log(`${positiveArr}`))
}
console.log(positiveArr)
console.log(negativeArr)