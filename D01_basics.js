// My first javascript code

// Better let than var
// Camel Case
// No hyphen or spaces or number at the beginning

let firstName = 'Rogger';
let lastName = 'Vasquez';

const interestRate = 0.12;
// Generates error, is a constant
// interestRate = 0.15;

console.log('Interest Rate constant' , interestRate);

// ----------------- Primitive Value Types --------------------------------------------
let stringLiteral = 'Text';
let numberLiteral = 30;
let isApprovedBooleanLiteral = true;
let undefinedVar = undefined;
let nullVar = null;

console.log ('The type of stringLiteral is ' , typeof stringLiteral);
stringLiteral = 15;
console.log ('Now the type of stringLiteral is ' , typeof stringLiteral);

// ++What is the type of a variable that has a null value assigned. Is Object
console.log('Type of nullVar is ', typeof nullVar);

//------------------- Reference Types : Object, Array, Functions -----------------------------------

// Objects
let person = {};  // empty object
person = {
    firstName : 'Rogger',
    lastName : 'Vasquez',
    age : 46
}
console.log (person);

// Dot notation or bracket notation for setting/getting properties
person.lastName = 'Martinez';
person['age'] = 40;
console.log (person.lastName, person['age']);

// For dynamic property access, the bracket notation works
let selectedProperty = 'firstName';
console.log ('the value of the selected property is', person[selectedProperty]);

// Arrays
let selectedColors = [] ; //empty array , typeof an array = Object
selectedColors = ['Red', 'Blue', 23];   // Each element can be of different type
console.log(selectedColors, selectedColors[0], selectedColors[2]);
console.log('Length of the array' , selectedColors.length)

// Add new element to the array,
selectedColors [3] ='Green';
selectedColors.push ('Orange');
selectedColors [7] = 'Black';  // Items 5,6 will be created but undefined
console.log (selectedColors);