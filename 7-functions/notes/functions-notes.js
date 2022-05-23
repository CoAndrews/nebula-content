function hasLetterZ(text){
    for(let i = 0; i < text.length; i++){
        if(text[i] === 'z' || text[i] === 'Z'){
            return true;
        }
    }
    return false;
}

const applicant = "Zetra Sloan";

if(hasLetterZ(applicant)){
    console.log("Welcome to the Z-club! We are all proud to have that rare letter z in our names!");
} else {
    console.log("Unfortunately you didn't make the cut.")
}

//In our hasLetterZ function definition we've added a parameter.
// This gives us room to pass in an argument and allows the function to be dynamic. The function is returning a boolean value, which means it evaluates to either true or false, and it also means we can use it reliably within an if statement condition. 

function multiplyBy10(x){
    console.log(x*= 10)
}
multiplyBy10(60)

function sayGoodbye(name){
    console.log(`Oh, ${name}...mi amor, mi vida, Goodbye! `)

}
sayGoodbye("T")

newArray=[]
let myArray = [3, 4, 20, 11, 14, 15]
function evenNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] %2===0){
            newArray.push(arr[i])
            console.log(newArray)
        }
    }

    }


evenNumbers(myArray)


 function reverseWords(text){
     let reversed = [] //declaring an empty array to push the reversed values into
     for (let i = text.length-1; i >= 0; i--){ //decrementing through parameter, starting at last index
reversed.push(text[i]) //pushing each element into our new array
     }console.log(reversed.join('')) //combines array elements into a string, the empty string removes any space between elements
 }



 reverseWords("dance"); //call your function with any word and get your word in reverse

 //global variables can be called by anything
 //local variables can only be called withing the function