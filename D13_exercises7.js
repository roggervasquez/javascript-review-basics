// Exercise move element inside array

const numbers = [10,20,30,40,50,60,10,20,30,10];
const output = moveElement (numbers, 0, 2);
console.log(output);
const other = moveElement(output,4,-2);
console.log(other);


function moveElement (array, index, offset) {
    
    const position = index + offset ;
    if (position > array.length || position < 0) {
        console.error ("Invalid offset");
        return;
    }
    const output = [... array];
    const element = output.splice (index,1) [0]; 
    output.splice (index + offset , 0, element);
    return output;

}


// Count Ocurrences in array, normal way and other using reduce

let hoyMany = countOcurrencesV1 (numbers, 10);
console.log ('Normal Ocurrences for number 10 = ' , hoyMany);

hoyMany = countOcurrencesUsingReduce (numbers,10);
console.log ('Using Reduce Ocurrences for number 10 = ' , hoyMany);


function countOcurrencesV1(array , searchElement) {
    let count = 0;
    for (let el of array) {
        if (el === searchElement) {
            count++;
        }
    }
    return count;
}

function countOcurrencesUsingReduce (array , searchElement) {
    return array.reduce (( accumulator, current ) => {
        const ocurrence = (current === searchElement) ? 1 : 0;
        console.log (`Accumulator : ${accumulator} , Current item : ${current} , SearchElement : ${searchElement}`);
        return accumulator + ocurrence;
    }, 0); // Important to set the initial value of the accumulator
}
