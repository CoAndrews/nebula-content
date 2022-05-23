 const car = {
     color: 'Green',
      engine: 'V8',
     exhaust: 'Dual Rear Exit',
     doors: 4
 };
const familyOfFive = {
    mother: "Sunflower",
    father: "Rat Boi",
    daughter: "Saturn",
    son: "of Sam ",
    dog: "Cugo",
}

const object1 = { first: 1, second: 2 };
const object2 = { first: 1, second: 2 };
const object3 = object1;

console.log(object1 === object2);
// This returns false

console.log(object3 === object1);
// This returns 

console.log(familyOfFive)

familyOfFive.mother = "Death Becomes Her";

console.log(familyOfFive)

console.log(familyOfFive.mother) //will log the key to the 
// const dog = {
//     color: 'brown',
//     breed: 'lab'
// };

// const colorKey = "color"

// car.exhaust // Uses dot notation to access the exaust property
// // This evaluates to 'Dual Rear Exit'

// car['exhaust'] // Uses bracket notation to access the exaust property
// // This also evalutes to 'Dual Rear Exit'


// const returnAnyProp = (object, properyName) => {
//     return object[properyName]
// };

// // console.log(returnAnyProp(car, 'engine'))
// // // Evaluates to 'V8'

// // console.log(returnAnyProp(dog, 'breed'))


// //Need to use bracket notation if key is String
// const family = {
//     wife: "Michelle",
//     'pet dog': "Chelsea"
// }

// console.log(family[["pet dog"]])


//Both accessing the Math Object
// Math.sqrt(25)
// Math['sqrt'](25)


// const car = {
//     color: 'Green',
//     engine: 'V8',
//     exhaust: 'Dual Rear Exit',
//     turnOffEngine(){
//         console.log("Power Down");
//     }
// };

// car.engine = 'V6';
// car['engine'] = "V6"
// // We've changed the engine property on our car object

// car.topSpeed = '125 mph';
// car['topSpeed'] = '125 mph'
// // What?? Oh, we can add a brand new property like this too

// delete car.color

// function startCar(){
//     console.log("Vroom Vroom!");
// }

// car.start = startCar;


// car.start()
// car.turnOffEngine()
// // console.log(car);


// const car = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph',
//     racingAccessories: {
//         sharkfins: 10,
//         wingSpoiler: { brand: 'Mophorn GT', material: ['Aluminum',"Steel"]},
//         sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
//     },
//     start(){
//         console.log("Vroom Vroom!");
//     }
// }

// //Chain together property accesors
// console.log(car.racingAccessories.sharkfins)
// console.log(car['racingAccessories']['sideSkirt']['brand'])
// console.log(car['racingAccessories'].sideSkirt['brand'])

// console.log(car.racingAccessories.wingSpoiler.material[1])


// const momsCar = {
//     color: 'Orange',
//     brand: 'Honda',
//     topSpeed: 90
// }

// let newSpeed = 125;

// function tryMutatePrimitive(prim, value){
//     prim = value;
//     console.log(prim)
//     return prim;
// }

// tryMutatePrimitive(newSpeed, 300);
// // Returns 300
// console.log(newSpeed);
// // Nothing changed - logs 125.

// function tryMutateObject(obj, prop, value){
//     obj[prop] = value
//     return obj;
// }

// tryMutateObject(momsCar, 'topSpeed', 300);
// // Returns the momsCar object
// console.log(momsCar.topSpeed);
// // Logs 300


// const car = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph'
// }

//Both making a shallow copy of Object
// const newCar = {...car};

// const newCar = {};
// Object.assign(newCar, car);

// console.log(newCar);
/*
    This will log:
        {
            color: 'Green',
            engine: 'V6',
            exhaust: 'Dual Rear Exit',
            topSpeed: '125 mph'
        }
*/

// console.log(newCar === car); // This will log false


// const car = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph',
//     racingAccessories: {
//         sharkfins: 10,
//         wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
//         sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
//     },
//     start(){
//         console.log("Vroom Vroom!");
//     }
// }

// For In loop
// for(let key in car){
//     car[key] = "Eric"
// }

//Object.key()
// returns an array of keys
// Object.keys(car).forEach((key)=>{
//     car[key] = "Eric"
// })

// Object.values(car).forEach(val =>{
//     console.log(val)
// })

// returns array of arrays
// each array looks like [[key, value], [key, value]]
// Object.entries(car).forEach(entry =>{
//     console.log(entry)
// })


// const car = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph',
//     racingAccessories: {
//         sharkfins: 10,
//         wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
//         sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
//     },
//     isCarOn: false,
//     start(){
//         car['isCarOn'] = true
//     }
// }

// car.start()
// console.log(car)

//in objects your information will have keys and they will hold values
//objects are meant to represent real life things