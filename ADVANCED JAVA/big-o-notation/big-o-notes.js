const nums = [1, 2, 3, 4, 5 , 6, 7]

function quadraticTimeExample(arr){

    console.time("myTimer");

    const holdPairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j) holdPairs.push([arr[i], arr[j]]);
        }
    }

    console.timeEnd("myTimer");

    return holdPairs;
}

//run our function with an input which will provide an output and a timer

quadraticTimeExample(nums);


function constantTimeExample(num){
    if(num <= 10){
        return num;
    } else {
        let num2 = num / .5 - 1;
        return num * num2;
    }
}

function constantTimeExample2(str, obj){
    return obj[str] ? true : false
}
// Looking to see if a key exits in an obj - returns a boolean value


console.log(constantTimeExample(14))