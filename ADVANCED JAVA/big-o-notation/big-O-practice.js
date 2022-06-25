// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//0 of n

// 1.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
    }

    return newStr;
}

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}

//0 of 1
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}

//o of N
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}

//if statement with condition, variable assignment, nested for loops, and a calculation
//o (n^2)



// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);

//o of 1

// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

// o of n

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}


//o (log n)