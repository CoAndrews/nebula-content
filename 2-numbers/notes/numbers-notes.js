//Add together two numbers.

console.log(3 + 3)


//Subtract two numbers.

console.log(76 - 11)

//Multiply two numbers.
console.log(2 * 8)

//Divide two numbers.

console.log(9 / 2)

//Find the remainder of 223 divided by 3.
console.log(223 % 3)
//Store the value in a variable produced by dividing 300 by 100. Declare that value with the let keyword.

let x = (300 / 100); 

console.log ( "x ->", x )

//Increment that variable by 1 using the increment operator.

x++;


//console.log that variable, or type it directly in the console to view it's value.
console.log(x)

x *= 5
// x = x * 5
//Use a multiply assignment operator to change the value of the variable to the product of multiplying it by 5.
console.log("x times",x)


//console.log that variable, or type it directly in the console to view it's value.

//const value = Math.pow(4,4)
//console.log(value)
//first number being the base second number being the exponent

console.log(Math.sqrt(16))


//const number = Math.random() *300
//console.log(number)
//console.log(Math.ceil (number))

//let absExample = Math.abs(-5);
//console.log(absExample, "<--- line 93");

// Math.min() - returns the lowest-valued number passed into it, or NaN if any 
  // parameter isn't a number and can't be converted into one

let minExample = Math.min(4, 3, 8, 10, 21, 2);
console.log(minExample, "<--- line 101");


// Math.max() - The Math.max() function returns the largest of the zero or more numbers given as input 
  // parameters, or NaN if any parameter isn't a number and can't be converted into one.


let maxExample = Math.max(4, 3, 8, 10, 21, 2);
console.log(maxExample, "<--- line 109");


// Math.random() - function returns a floating-point (decimal number), pseudo-random number in the range 0 to less than 1 
    // (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you 
    // can then scale to your desired range. The implementation selects the initial seed to the random 
    // number generation algorithm; it cannot be chosen or reset by the user.

let randomExample = Math.random();
console.log(randomExample, "<--- line 119");

// MORE on Math.random()

let randomExample2 = Math.random()*50;
console.log(randomExample2, "<--- line 124");
console.log(Math.floor(  Math.random()*1000  ), "<--- line 125");

console.log(0.3 - 0.1)