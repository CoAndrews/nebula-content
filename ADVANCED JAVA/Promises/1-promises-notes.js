//browser examp.

let dishPromise = true;
let cleanedDishes = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (dishPromise) // if this exists, or its true, run it 
         {
            resolve('I cleaned the dishes');
        } else {
            reject('I did not clean the dishes');
        }
    }, 5 * 1000);
    //the time youd like to delay until it runs
});

console.log(cleanedDishes);
setTimeout(() => {console.log(cleanedDishes)}, 5001)


//Promise Object Methods:
//Promise.then(onFulfilled, onRejected)
//Promise.catch(onRejected)
//Promise.finally(onFinally)

let dishPromise2 = makePromise(true);
dishPromise
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => console.log("I've already told you if I washed the dishes!"));



    let state = [];

function makePromise() { return new Promise(res => res())};

console.log(makePromise()
    .then(res => {state = [...state, 'new data from promise 1']})
    .then(res => {state = [...state, 'new data from promise 2']})
    .then(res => {state = [...state, 'new data from promise 3']})
    .then(res => {state = [...state, 'new data from promise 4']})
    .then(res => { console.log(state)})
    .catch(err => { console.log(err) })
)

//promises with asynchronus code
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777


let p = new Promise((resolve, reject) => {
    let A
})