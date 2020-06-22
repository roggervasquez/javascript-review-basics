
const myArray = ['test', null, undefined, 0, '' , NaN,  15 , false,'333'];
const count = countTruthy(myArray);
console.log ('Count of truthy is', count);

function countTruthy (elements) {
    let count  = 0;
    for (let i = 0; i < elements.length ; i++) {
        let isTruthy = !isFalsy (elements[i]);
        count = isTruthy ? count + 1 : count + 0;
    }
    return count;

}

function isFalsy (item) {
    if (typeof item === 'undefined')
        return true;
    if (typeof item === 'number' && isNaN(item))
        return true;
    if (item === null || item === 0 || item ==='' || item === false)
        return true;
    
}