
const myArray = ['test', null, undefined, 0, '' , NaN,  15 , false,'333'];
const count = countTruthyV3(myArray);
console.log ('Count of truthy is', count);

function countTruthyV1 (elements) {
    let count  = 0;
    for (let i = 0; i < elements.length ; i++) {
        let isTruthy = !isFalsy (elements[i]);   // did my own function, was not necessary
        count = isTruthy ? count + 1 : count + 0; 
    }
    return count;
}

function countTruthyV2 (elements) {
    let count  = 0;
    for (let i = 0; i < elements.length ; i++) {  // used traditional for loop
        if (elements[i]) { // it will automatically evaluate if truthy ... nice!!
           count++;
        }   
    }
    return count;
}

function countTruthyV3 (elements) {
    let count  = 0;
    for (let element of elements) {  // used es6 of loop
        if (element) { // it will automatically evaluate if truthy ... nice!!
           count++;
        }   
    }
    return count;
}

// This is not the best way. Javascript already does that , but was good as exercise to recall the isNaN function
function isFalsy (item) {
    if (typeof item === 'undefined')
        return true;
    if (typeof item === 'number' && isNaN(item))
        return true;
    if (item === null || item === 0 || item ==='' || item === false)
        return true;
    
}