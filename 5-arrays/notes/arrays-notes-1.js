const favoriteMovies = ["Casablanca", "Audition", "Perfect Blue", "Children of Men"]

const myArray = [10, 9, "grab this"];

  const holdString = myArray[2];

  console.log(holdString);

  console.log(favoriteMovies[favoriteMovies.length-1])

  const rugRats = ["Tommy", "Chuckie", "Phil and Lil", "Angelica", "Susie", "Kimi", "Dil", "Spike"];

  console.log(rugRats[rugRats.length-1])
console.log(rugRats[3])
console.log(rugRats[1]) 
console.log(rugRats[5]) 

const myLuckyNumbers = [5, 3, 2, 11, 29];


myLuckyNumbers[4] = (myLuckyNumbers[myLuckyNumbers.length-1] / 3) 
console.log(myLuckyNumbers)

//Change the 2nd element to equal the product of multiplying it by 3.
myLuckyNumbers[1] = (myLuckyNumbers[myLuckyNumbers.length-4] * 3)

//faster way myLuckyNumbers[4] / =3
//my luckynumbers[1] * = 3
console.log(myLuckyNumbers)

const checking = ["testing", "this", 5, 23];

checking.indexOf(5);
// Returns 2

const myThing = ["here", "we", "are"];

myThing.push("yes!");

console.log(myThing);
// Outputs: ["here", "we", "are", "yes!"]

myThing.push("ok", "lets", "go");

console.log(myThing);
// Outputs: ["here", "we", "are", "yes!", "ok", "lets", "go"]
const animes = ["Naruto", "Ghost in the Shell", "Full Alchemist", "I am Legend"];

animes.pop();
//pop removes the last element from an array


console.log(animes);
// Outputs: ["Naruto", "Ghost in the Shell", "Full Alchemist"];

animes.shift();
//shift removes the first element

console.log(animes);
// Outputs: ["Ghost in the Shell", "Full Alchemist"]


animes.unshift("Naruto");
//replaces a removed something from an array


console.log(animes);
// Outputs: ["Naruto", "Ghost in the Shell", "Full Alchemist"];

const multiArray = [[1,2,3], [4,5,6], ["7","8","9"]];

let innerIndex = multiArray[1][1];
console.log(innerIndex)
//first bracket of the multiArray is at the [1] index, second bracket is the element inside the inner array
let nextIndex = multiArray[2][2];
console.log(nextIndex)
console.log(`I have a niece who is ${multiArray[multiArray.length-1][0]} years old.`);