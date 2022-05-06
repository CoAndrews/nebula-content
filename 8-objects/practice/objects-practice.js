// 1.   Create an object for a celebrity and save it to a variable
const davidBowie = {
    hairColor: "Blonde",
    eyeColor: "Heterochromia",
    protoge: "Luther Vandross, Iggy Pop"
};
console.log(davidBowie)
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
davidBowie.wifeName = "Iman";
davidBowie.lastAlbum = "Blackstar";
davidBowie.birthDate = "January 8th, 1947";

console.log(davidBowie)
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
davidBowie["patMethenyCollab"] = "This is Not America";
davidBowie["youngAmericansReleaseYear"] = "1975";
davidBowie["birthCity"] = "London";

console
// 4.   Write a function that allows us to add or update 3 properties
function addThreeProp (object, propertyName, value){
    object[propertyName] = value
    return object
}
addThreeProp(davidBowie,"letsDance","put on your red shoes")
addThreeProp(davidBowie, "deathPlace", "New York City")
addThreeProp(davidBowie,"height", "5'10")
console.log(davidBowie)
// 5.   Using a loop - log all the celebrities properties to the console

for (let propertyName in davidBowie){
    console.log(`${propertyName}`);
}
