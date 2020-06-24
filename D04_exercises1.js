
// Function takes 2 arguments and return max
function max (number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

let number1 = 12;
let number2 = 42;
let result = max (number1, number2);
console.log (`Max between ${number1} and ${number2} is ${result}`);

// function isLandscape
function isLandScape (width, height) {
    //return (width > height) ? true : false;
    return (width > height);
}
console.log ('Is landscape' , isLandScape (500, 600));

// FizzBuzz
const output = fizzBuzz(true);
console.log (output);

function fizzBuzz(input) {
     if (typeof input !== 'number') {
       return  NaN;  // Nan  typeof Nan is Number, lol
    } 
    let isDivisibleBy3 = (input % 3) === 0  ;
    let isDivisibleBy5 = (input % 5) === 0  ;
    let isDivisibleByBoth = isDivisibleBy3 && isDivisibleBy5;

    if (isDivisibleByBoth)
       return 'FizzBuzz';
    
    if (isDivisibleBy3) 
       return 'Fizz';
    
    if (isDivisibleBy5)
           return  'Buzz';
    
    return input;
}

// check speed

checkSpeed(75);

function checkSpeed (speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed >= 0 && speed < (speedLimit + kmPerPoint)) {
        console.log('Ok', speed);
    }  else  {
        const overLimit = speed - speedLimit;
        const points = Math.floor(overLimit / kmPerPoint);
        if (points >= 12) {
            console.log ('License Suspended');
        }
        else { 
            console.log ('Points', points);
        }
    }
}

// Show Numbers
showNumbers (15);
function showNumbers (limit) {
    for (let i = 0 ; i <= limit ; i++ ) {
        const numberLabel = (i % 2 === 0 ) ? 'EVEN' : 'ODD';
        console.log(i,numberLabel);
    } 
}