// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamCar = {
    color: "black",
    modelYear: 1968,
    brand: "Mercedes",
    nickNames: ["Daisy", "Hall 9000", " I'm sorry Dave, but in accordance with sub-routine C1 532/4, quote, 'When the crew are dead or incapacitated, the computer must assume control', unquote. I must, therefore, override your authority now since you are not in any condition to intelligently exercise it."],
    carIsOn: true,
    convertible: true,

}
console.log(dreamCar)
// 2.   Using dot-notation Log to the console 3 properties from the previous object
dreamCar.tiresNum = 4;
dreamCar.homeState = "New York";
dreamCar.milesNum = 10,000;

console.log(dreamCar)
// 3.   Using bracket-notation Log to the console 3 properties from the previous object

const returnAnyProp = (object, properyName) => {
         return object[properyName]
 };
 returnAnyProp(dreamCar,'carIsOn')
 
// 4.   Try and log a property that doesn't already exist - what output do we get?

// 5.   Add a new key-value pair to the vehicle. 

// 6.   Using bracket-notation update a property on the vehicle. 

// 7.   Using dot-notation update a property on the vehicle. 


// 8.   Create a method for turning your vehicle on

const startCar = ()=> {
    dreamCar.carIsOn = true
}

dreamCar.startCar = startCar

// 9.   Create a method for turning your vehicle off

const turnOffCar = ()=> {
    dreamCar.carIsOn = false
}

dreamCar.turnOffCar = turnOffCar

// console.log(dreamCar)

//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)


// if(!dreamCar.carIsOn){
//     dreamCar.startCar()
// }
// else if(dreamCar.carIsOn){
//     dreamCar.turnOffCar()
// }

// console.log(dreamCar)



// dreamCar.stopEngine = function (inPark, keyTurned) {
//     if (inPark && keyTurned && dreamCar.carIsOn === true) {
//       dreamCar.carIsOn = false;
//       return "Car is turned off";
//     } else if (!inPark && keyTurned && dreamCar.carIsOn === true) {
//       return "Please put the car in park";
//     } else if (inPark && !keyTurned && dreamCar.carIsOn === true) {
//       return "Just in park";
//     } else {
//       return " The engine is already off";
//     }
//   };