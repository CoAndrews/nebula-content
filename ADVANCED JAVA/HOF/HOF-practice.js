// 1.   Write a higher order function that manipulates every number in an array 
//      
const myArray = [1, 2, 3, 4, 5];

// const squaredNum = (num) => {
//     return num ** num;

// } 


const changeNums = (arr, func) => {
    const newArr = [];
    for(let i=0; i < arr.length; i++){
let currentElement = arr[i];
newArr.push(func(currentElement))
    }
    return newArr;
}

function squaredNum (num){
    return  num **=2;
}

function doubler (num){
    return num * 2;
}

function halves(num){
return num / 2;
}
console.log(changeNums(myArray, halves))
console.log(changeNums(myArray, squaredNum))
console.log(changeNums(myArray, doubler))
// function changeNums(array, squaredNum) {
//     return array.map(e => e + 10);  
//   }
  
//   console.log(changeNums(array));

//[2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]


// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2
const ourString = "The most romantic thing in the word is doing MATH on a TEAMS call!"
const stringInfo = (str, func) => {
    return func(str);
}

function length(str){
    return str.length
}
const vowels = (str) => {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == `a`||str[i] == `e` || str[i] == `i` || str[i] == `o` || str[i] == `u`){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

function capitals(str){
    let capsCount = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            capsCount += 1;
        }
    }
    return capsCount;
}

console.log(stringInfo(ourString, length))
console.log(stringInfo(ourString, vowels))
console.log(stringInfo(ourString, capitals))
// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18

const numArr = [2, 3, 5, 8]

const minimizeNums = (func, arr) => {
    return func(arr)
}

function add(arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum += arr[i]
    }
return sum;
}

console.log(minimizeNums(add, numArr));

const danceArr = [45, 68, 7, 11]

const storeArr = danceArr.map(el => el *2);

const pow = cur => cur ** 2;

const storeArr2 = danceArr.map(pow)

console.log(storeArr2)


const peeps = ["Davey", "Deyvn", "May", "Aphrodite", "Venus"]

//const greeting = cur => "  Howdy " + cur + ", It is absolutely horrible to meet and now know you!"

peeps.forEach(element => console.log("Hello, " + element))

//console.log(storeGreeting)

// 3.   Given an array of mixed values, log whether the value is undefined.

const arrMixed = ["Hey Fart!",[], "Dance Disco Dance Crisco", 45, 5000]


arrMixed.forEach(element => console.log(typeof(element)))


// 4.   Given an array of strings, log the vowel count for each string.
const deathAndTaxes = ["Please Kill Me Slowly"];

const howToDie = (str, func) => {
    return func(str);
}


const vowelsCount = (arr) => {
    let strVowels = 0;
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j <arr[i].length; j++){
            if(arr[i][j] === 'a' || arr[i][j] === 'e' || arr[i][j] === 'u' || arr[i][j] === 'o' || arr[i][j] === 'i'){
                strVowels += 1;
            }
        
        }

    }
    console.log(strVowels);
}
deathAndTaxes.forEach(vowelsCount)
// 5.   Given an array of numbers, double them and log them to the console. 

const delta = [56, 34, 77, 100];

// const doubleArr = delta.map(el => el);
// const multi = cur => cur * 2;
// const doubleArr2 = doubleArr.map(multi);

// console.log(doubleArr2)

delta.forEach(el => console.log(el *2))

// .filter

const words = ['spray', 'limit', 'elite', 'unrepentant', 'incohesive']

const longWords = words.filter(word => word.length >6)

console.log(longWords)

const newWordies = ['bee', 'poop', 'mouth', "december"]

const shortBois = newWordies.filter(str => str.length < 4) 

console.log(shortBois)
const nums = [1,2,3,4,5,6,7,8,9,10]
// 1.   Write a function to filter an array for all the numbers greater than 5

const greaterThanFive = nums.filter(num => num > 5);

console.log(greaterThanFive)

// 2.   Write a function to filter an array for all the even numbers

const evenSteven = nums.filter(num => num % 2 === 0);

console.log(evenSteven)

// 3.   Write a function to filter an array for all the non number items

const arrNumWord = [4, 56, 700, "pee", "poo"];

const nonNum = arrNumWord.filter(num => typeof (num) !== "number")

console.log(nonNum)

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

const canDrink = partyPeople.filter( cur => cur.age >= 21)

console.log(canDrink)
// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..

// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums1 = [1,2,3,4,5]

let outputNums1 = (nums1.reduce((accumulator, current) => accumulator + current))

console.log(outputNums1)
// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
let outputNumsMulti = (nums1.reduce((accumulator, current) => accumulator * current))

console.log(outputNumsMulti)
// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const nums2 = [2,8,12,98,167,3]

let nums2Median = (nums2.reduce((acc, curr) => Math.max(acc, curr) ))

console.log(nums2Median)
// 4.   Write a HOF to find the oldest person in a group
const partyPeople2 = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

const oldFart = partyPeople2.reduce((accumulator, currentValue) => 
{
    if(currentValue.age > accumulator.age){
        accumulator = currentValue.age
    }
    return accumulator;
})
console.log(oldFart)

//.find()

// 1.   Write a HOF to find the first number greater than 10 in an array
const nums5 = [1,2,3,15, 4, 80, 34]

const firstBig10 = nums5.find(el => el > 10);

console.log(firstBig10)

// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]

const firstStr = arr.find(el => typeof (el) === "string")

console.log(firstStr)
// 3.   Write a HOF to find the first instance of null in an array 
const firstNull = arr.find(el => typeof (el) === null)

console.log(firstNull)


// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const numy = [1,25,6,3,88,45,0]

numy.sort((a, b) => a < b ? 1 : -1);
console.log(numy)


// 2.   Write a HOF to sort peoples names by their length
const ppl = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

ppl.sort((a, b) => (a.name.length > b.name.length) ? 1 : -1)

 console.log(ppl)
// 3.   Write an HOF to sort an array of objects of people by their age youngest to oldest
ppl.sort((a, b) =>(a.age > b.age) ? 1 : -1);

console.log(ppl)
// 4.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']
//using .charCodeAt method
strings.sort((a, b) => a.charCodeAt(a.length -1)- b.charCodeAt(b.length -1));

console.log(strings)

