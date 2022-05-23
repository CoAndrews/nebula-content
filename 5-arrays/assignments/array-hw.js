// 1.   Create an array that contains two of your favorite things to do
let myFavoriteThings = ["Singing", "Performing"]
// 2.   Using an array method, add another thing you like to do to that list
myFavoriteThings.push("Dancing")
console.log(myFavoriteThings)
// 3.   Reverse the order of the array (remember, if needed use MDN)
 myFavoriteThings.reverse();

console.log(myFavoriteThings)
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// 4.   log the length of the array
console.log(daysOfWeek.length);

// 5.   log the 4th element in the array
console.log(daysOfWeek[3])
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
daysOfWeek.shift()

console.log(daysOfWeek)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
daysOfWeek.unshift("Sunday")
console.log(daysOfWeek)
// 8.   Remove the last element in the array. Log the new array and log the element removed
daysOfWeek.pop()

console.log(daysOfWeek)

// 9.   Add 'Saturday' back to the end of the array and log the new array
daysOfWeek.push("Saturday")

console.log(daysOfWeek)
//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = ("Friday Junior")

console.log(daysOfWeek)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
console.log("My favorite day of the week is " + daysOfWeek[4])
//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

phone.push(laptop)

console.log(phone)

//console.log(phone.concat(laptop);

//13.   Write a line of code to test if something is an array or not

console.log(Array.isArray(phone))