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



