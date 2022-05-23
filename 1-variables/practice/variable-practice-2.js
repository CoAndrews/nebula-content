// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/



const fName = "Chanel";

const lName = "Andrews"

const houseNum = "593"

const street = "Rutland";

const city = "Brooklyn"

const state = "NY"
 
const zip = "11203"


const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`
//backticks allows us to put variables into one string
console.log(address)
