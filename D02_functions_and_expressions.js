function greet (name, lastName) {
    console.log ('Hello ' + name + ' ' + lastName);
}

function square (number) {
    return number * number;
}

greet ('Rogger', 'Vasquez');

let result = square(4);
console.log ('Square of 4 is ', result);

// ----------- Operators ---------------
// Arithmetic, Assignment, Comparison, logical, bitwise.
let x = 10;
let y = 3;
console.log(`Sum x=${x} y=${y} x+y=`, x + y) ; // sum
console.log(`Substract x=${x} y=${y} x-y=`, x - y) ; // substract
console.log(`Multiply x=${x} y=${y} x * y=`, x * y) ; // multiply
console.log(`Divide x=${x} y=${y} x / y=`, x / y) ; // Divide
console.log(`Remainder x=${x} y=${y} x % y=`, x % y) ; // Remainder
console.log(`Exponent x=${x} y=${y} x ** y=`, x ** y) ; // Exponent

// Increment / decrement
console.log (++x,--y);
console.log (x++, y--); 

// Assignments
x += 5;  y *= 4;   // x = x + 5;  y = y *4;
console.log (x,y);

// Comparisons - Relational Operators
x = 1;
console.log (x > 1);
console.log (x >= 1);
console.log (x < 1);
console.log ( x <=1 );

// Equality operators
console.log ( x === 1) ;  // Strict equality operator , same type and value
console.log ( x !== 1) ;  // Non strict 

console.log ('Equality operator');
console.log ( x == 1) ;  // True
console.log ( x  == '1'); // True also Lose equality operator
console.log ( x === '1'); // False, not same type
// Note for == : Javascript tries to compare the right element to the same type of the left and then only compares the value

// Ternary operator
let points = 90;
let customerType = points > 100 ? 'Gold Customer' : 'Silver Customer';
console.log ('Customer type :', customerType);

// Logical Operators And ( && )  Or ( || )  Not ( ! )
let highIncome = true;
let goodCreditScore = true ;
let elegibleForLoan = highIncome && goodCreditScore ;
console.log ('Elegible for Loan', elegibleForLoan);

// Or uses Short circuit
highIncome = true;
goodCreditScore = false;
elegibleForLoan = highIncome || goodCreditScore ;
console.log ('Elegible for Loan', elegibleForLoan);

let applicationRefused = !elegibleForLoan;
console.log ('Application Refused ', applicationRefused);

// Logical operators with Non boolean expressions
let operand1 = false;
let operand2 = 'Rogger';
let resultLogical = operand1 || operand2 ; // false || 'Rogger' will return Rogger
// Javascript uses conversion to see if Falsy ,, things that are falsy:
// false, Undefined, null, 0, '', Nan   , all the rest are Thruthy

let userColor = null;
let defaultColor = 'Blue';
let currentColor = userColor || defaultColor ;  // So if user color is falsy, for example is not selected, then it will use default color
console.log('Current Color is', currentColor); // but if thruty so will select the userColor

// Bitwise Operators
console.log ( 1 | 2) ;
console.log ( 1 & 2) ;

// Example, Read Write, execute
// 00000100  = Read
// 00000110 = Read and Write
// 00000111 = Read , write execute
let readPermission = 4;  // 00000100
let writePermission = 2; // 00000010
let executePermission = 1; // // 00000001

let myPermission = 0;  //Not set
myPermission = myPermission | readPermission | writePermission;
console.log ('My Permissions', myPermission);

let hasPermission = myPermission & executePermission ? 'yes' : 'no';
console.log (hasPermission); // does not have the execute permission

// Operators Precedence , use parenthesis 

// Exercise Swap 2 variables
let a = 'Red';
let b = 'Blue';

let c = a;
a = b;
b = c;

console.log('a=',a);
console.log('b=',b);










