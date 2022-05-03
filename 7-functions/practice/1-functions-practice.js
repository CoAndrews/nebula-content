// 1. Write a function that takes in 1 number and returns that number + 1
function sum(a){
    console.log(a += 1)
}
sum(4)

//we declared a function, gave it two parameters and then called that function and logged it to the console

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.

function goodnight(name){
    console.log(`Goodnight my sweet, sweet, Demon,  ${name}`)
}
goodnight("Chanel")

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'

randomArr=[23, 4, 6, 15, 0]
function hasNumberZed(arrNumbers){
    for(let i = 0; i < arrNumbers.length; i++){
        if(arrNumbers[i] === 0 ){
            return true;
        }
    }
    return false;
}

if(hasNumberZed(randomArr)){
    console.log("This Array has a Number Zero in it!! Enjoy Nothing!");
}else {
    console.log("There is no Zed, there is no GOD.")
}
// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloTen (text){
    for (let i =0; i <=10; i++)
    console.log(text)
}
helloTen("Hello World")
// 5. Write the prior function utilizing a 'fat arrow' function
const greeting = () => {
    for(let i = 0; i <= 10; i++)
    console.log("Hello World");

}
greeting()
// 6. Write a function that multiplies 3 input numbers together.
function multipliesThreeTingz (beta,theta,alpha){
    console.log(beta*theta*alpha);
}
multipliesThreeTingz(45,35,65)
// 7. Write a function that takes in a number and logs all odd numbers leading up to that number

// 8. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 

// 9. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
//function mathOpp (a,b)
//10. Write a function which takes in two arrays and returns those arrays combined together.