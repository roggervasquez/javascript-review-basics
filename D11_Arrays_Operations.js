// Combining and slicing arrays

const first = [1,2,3,4,5];
const second = [6,7,8,9];

const combined = first.concat(second); // Concat method
console.log ('Combined',combined);

// Slicing an array
const slice = combined.slice(2,5) ; // from position 2 to 5-1 (4)
console.log('Slice', slice);

const slice2 = combined.slice(2); // from position 2 to the end
console.log(slice2);
// Consider always that it the array has objects or other reference types, those are copied, and reference same address.
// Primitive types are copied by value

// Spread Operator for ES6
const combined2 = [...first, ...second, { value: 10}]; // Instead of concat

const copy = [...combined2]; 
console.log(copy, combined2);

combined2[9].value = 33;   // is a reference, both arrays point to same address for that item at index 9
console.log(copy, combined2);