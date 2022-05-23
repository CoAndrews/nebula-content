// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function reverseWords(text){
    let reversed = [] //declaring an empty array to push the reversed values into
    for (let i = text.length-1; i >= 0; i--){ //decrementing through parameter, starting at last index
reversed.push(text[i]) //pushing each element into our new array
    }console.log(reversed.join('')) //combines array elements into a string, the empty string removes any space between elements
}

reverseWords("world"); //call your function with any word and get your word in reverse

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (text){
    for (let i =0; i <=10; i++)
    console.log(text)
}
repeatStr("Give it to me Baby!")
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
const arrNums = [34, -345, -1, 100]


function lowestNum (array){
    let min = Math.min(...array)
    console.log(min)

}
lowestNum(arrNums)

// //Spread Syntax
// ""..."" will take either a string, array or object and spread out and layer it's elements into a data structure where possible (the function argument space included). This means that if those elements are primitive values, they will be copied.

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

const arr2 = [90, 80, 2]

function sumOfArr(x,y){
    console.log(x + y)
}
sumOfArr(arr2,arrNums)
// https://www.codewars.com/kata/544675c6f971f