// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter a
const str = "indivudal"
let i = 0
while (i < str.length){
    if(str[i] === "a"){
        console.log([i] + "heres the A");
        break;
    } else {
        i++
    }
    }

// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100

// WHILE LOOPS

// while
// while(condition /* is true*/){
// // do something
// }
// function whileTrue (num){
// let counter = 0
// while(counter <= num){
// console.log(counter)
// counter ++
// }
// return 'it works!'

// }console.log(whileTrue(5))

//console.log(whileTrue(100))
//      Inside the while loop be sure to increase count by some number
let benjamin = 0;
while (benjamin <= 100){
    console.log('while the count is' + benjamin);
    benjamin++;
}

const myShoppingList = ["Apples", "Bread", "Cheese", "Grapes", "Sauerkraut", "Cucumber"];
  const myFridge = ["Tartar Sauce", "Pickles", "Sauerkraut", "Milk", "Cheese"];
  const iAlreadyHave = [];

  for(let i = 0; i < myShoppingList.length; i++){
    for(let j = 0; j < myFridge.length; j++){
      if(myShoppingList[i] === myFridge[j]){
        iAlreadyHave.push(myShoppingList[i]);
      }
    }
  }

  console.log(iAlreadyHave);
  // Output: ["Cheese", "Sauerkraut"]