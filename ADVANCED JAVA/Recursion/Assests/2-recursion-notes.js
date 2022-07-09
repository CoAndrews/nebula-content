const russianDoll = {
    doll: "Great Grandmother",
    child: {
        doll: "Grandmother",
        child: {
            doll: "Mother",
            child: {
                doll: "Daughter",
                child: false
            }
        }
    }
}

const countDolls = (doll) => {
    if(!doll.child){
        return 1;
    }
    return 1 + countDolls(doll.child);
}

// countDolls(russianDoll); // Returns 4.

// reversing a string, non-recursively
// decrementing for loop which pushes string characters into an array, backwards
// method to turn array of backwards characters into a string
function reverseStr(str){
    let rev = [];

    for(let i = str.length-1; i >= 0; i--){
        rev.push(str[i])
    }
    let joinedRev = rev.join('')
    console.log(joinedRev)
}
reverseStr('saturday');

// reversing a string recursively
function reverseString(str){
    if(str === '') {
        return '';
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
}
console.log(reverseString('ant')); // Returns 'stna'

// recursive check for palindrome

function isPalindrome(str){
    const len = str.length;
    if(len <= 1) return true;
    if(str[0] !== str[len-1]) return false;
    return isPalindrome(str.slice(1, len-1));
}
console.log(isPalindrome('racecar'))

// recursive factorials
// 4! --> 4 * 3 * 2 * 1 = 24
function factorial(num){
 if (num === 0){
    return 1;
 } return num * factorial(num-1);
} 
console.log(factorial(14));

// Practice

// 1. Write a recursive function to compute the sum of an array of integers