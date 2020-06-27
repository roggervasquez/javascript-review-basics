

/*****  Math  ******/

// Random, floor, ceil
const randValue = Math.random(); // 0 - 1

function randomRangeValue ( min , max) {
    return (Math.random() * (max - min ) + min);
}

function randomRangeIntValue ( min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor ( Math.random() * (max - min) + min );
}

console.log (randomRangeValue (1,10));
console.log (randomRangeIntValue ( 1,10));

// Absolute value
function difference ( number1, number2) {
    return (Math.abs( number1 - number2));
}

console.log ('Difference' , difference ( 5, 10));

// Round , trunc, pow ,  min , max
console.log (' Round of 3.1456 is ', Math.round (3.1456));
console.log (' Trunc value of 9.95 is', Math.trunc(9.15));

console.log ('Using Math : 2 exponent 4 = ', Math.pow (2,4));
console.log ('Using Operator ** : 2 exponent 4 = ', 2**4);

console.log ( 'The max value of 4,2,1,9.3,2 is ', Math.max(4,2,1,9.3,2)) ;
// if we have an array we can use the spread operator
const numbers = [4,2,1,9.3,2];
console.log ('Max value from array' , Math.max (...numbers));
// Same for min
console.log ('Min value from array' , Math.min (...numbers));

// There are some defined constants in Math , like PI
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log ('Circumference r=10' , calculateCircumference(10))



