// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement

let horseName = "Clicka"

let position = (Math.random()*2 )


switch (position === 1){
    case "Winner":
        console.log(`${horseName}, Finished first!`);
        break;
    case (position === 2) :
        console.log(`${horseName}, Finished in second place!`)
        break;
        case (position === 3):
        console.log(`${horseName}, Finished in third place!`)
        break;
    case (position > 4):
        console.log(`${horseName} did not finish in the top 3.`)
}
// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."