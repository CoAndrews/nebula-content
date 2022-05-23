let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let total = arr_1.concat(arr_2)

console.log(total)
let sum = 0

for (let i = 0; i < total.length; i++){
  sum += i;
  console.log(sum)
}

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

let reverse = []
for (let i = arr.length-1; i >= 0; i--){
  reverse.push(`${arr[i]}`);
}
console.log(reverse)

 let array1 = [" let's dance all night. ", "49", "go crazy!"]
 let array2 = ["never again!", "kiss me!"]

 let emptySwitch = []

for (let i = array1.length-1; i >= 0; i--){
  emptySwitch.push(`${array1[i]}`);
 }
 console.log(emptySwitch)

 for (let i = array2.length-1; i >= 0; i--){
   emptySwitch.push(`${array2[i]}`);
  
 }
 console.log(emptySwitch)