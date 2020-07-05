// Arrays

// Adding elements to an array at the end, beginning and middle
const localArray = [3,4,5];

localArray.push (100,200,300, 5,9);  // add these 3 numbers at the end
localArray.unshift (1,2) ; // add 1 and 2 at the beginning of the array
localArray.splice (2,0, 'A', 'B' ) ; // splice can be use for deletion too, so second parameter is zero, we dont want to delete
                                    // and insert in position 2

console.log(localArray);

// Finding elements in array (primitives and references)

// [1, 2, "A", "B", 3, 4, 5, 100, 200, 300, 5,9]
console.log (localArray.indexOf('Z')) ; // will not find it , so will return -1
console.log (localArray.indexOf('A')) ; // will  find it , so will return 2 
console.log (localArray.indexOf('A',3)) ; // will  find starting at position 3, it will return -1. A is not in that section
console.log (localArray.lastIndexOf(5)) ; // will  will return 10, there are 2 5s stored in the array, the last one is in pos 10

// To check if a primitive exists in the array
console.log(localArray.includes ('B')); // returns true

// Finding in objects
const jobs = [
    { id: 1 , title: 'Front end developer'} ,
    { id: 2 , title: 'Senior Developer' },
    { id: 3 , title: 'Senior react Developer' },
    { id: 4 , title: 'C++ Developer' },
    { id: 5 , title: 'nodejs Developer' },
];

let result = jobs.find(function(job) {
    return job.title === 'nodejs Developer';
})
console.log(result);

// or better use arrow functions, when just a parameter and just one return statement if can be abbreviated
result = jobs.find( job =>  job.title === 'nodejs Developer');
result2 = jobs.find( job =>  job.title.includes('Senior'));

console.log(result2); // Will return only the first one found // from the 2 Senior jobs

/*
result = jobs.find( (job) => {
    return job.title === 'nodejs Developer';
});
*/

console.log(result);

// We can also get the index of the object in the array using findIndex
let index = jobs.findIndex( (job) => {
    return job.title === 'nodejs Developer';
});

console.log('Index is', index);

// Removing elements from an array, end, beginning, middle

const numbers = [1,2,3,4,5,6,7];

const lastElement = numbers.pop();
console.log(numbers,lastElement);

const firstElement = numbers.shift();
console.log (numbers, firstElement);

const middleElement = numbers.splice(2,1) ; // Means to remove 1 element from position 2, actually we can delete more
console.log(numbers, middleElement);


// Emptying an array

let items = [1,2,3,4,5,6];
let anotherItems = items;
// Both are pointing to the same memory address.
items = [] ; // this will make items point to a new memory address without elements
console.log (items, ' - ', anotherItems) ; // But another items will still point to the original array.

// we will need to actually set empty to anotherItems
anotherItems = [] ; // Garbage collector eventually will recover the original space

items = [1,2,3,4,5,6];
anotherItems = items;
// Other way is to set the length to zero, to truncate the array
items.length = 0;
console.log (items, ' + ', anotherItems) ;

items = [1,2,3,4,5,6];
anotherItems = items;

// Another way is to use splice
items.splice(0, items.length); // Remove all elements
console.log (items, ' * ', anotherItems) ;






