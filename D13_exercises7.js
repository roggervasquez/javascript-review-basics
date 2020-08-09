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


// Getting max value using reduce

console.log ('Max Value using reduce', getMax (numbers));

function getMax (array) {
    return array.reduce ((accumulator, current) => {
    //    if (current > accumulator ) return current;
    //    else return accumulator;
       return (current > accumulator) ? current : accumulator;

    }) ; // No need to set accumulator because we will need first element as it is
}

// Using  filter, map, sort in arrays
// Get all movies in 2018 with rating greater than 4 sorted in descending order and only project title and rating
const movies = [
 { title: 'Movie 1', year : 2018, rating : 4.5},
 { title: 'Movie 2', year : 2018, rating : 4.5},
 { title: 'Movie 3', year : 2017, rating : 4.3},
 { title: 'Movie 4', year : 2018, rating : 4.4},
 { title: 'Movie 5', year : 2018, rating : 4.9},
 { title: 'Movie 6', year : 2020, rating : 3.5},
 { title: 'Movie 7', year : 2018, rating : 2.5}
]

const moviesResult = movies
.filter ( movie => movie.year === 2018 && movie.rating > 4 )
.sort ((movie1 , movie2 ) => movie1.rating - movie2.rating)
.reverse()
.map ( ( {title, rating}) => ( { title,rating}));    // using object destructuring

// .map (movie => {    // using simple creation of new object
//     let mov = { title : movie.title, rating : movie.rating};
//     return mov;
// });

console.log ('Movies Result',moviesResult);
