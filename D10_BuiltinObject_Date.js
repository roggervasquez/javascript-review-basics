/*****  Date   ******/
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
//  UNIX epoch
// UTC = Universal Time Coordinated 
// GMT = Greenwich Mean Time (GMT) is the time measured on the Earth's zero degree line of longitude, or meridian

const now = new Date() ; // Get current date
const now2 = Date.now(); // other way of using the static method but will return a big number, #ms from epoch date
const today = new Date('June 27 2020');

console.log (now,' * ', now2, ' * ' ,today);

const myBirthDay = new Date (1974,04,09) ; // Months start at zero, so January is 0 and so on , so 04 = May

console.log(myBirthDay);

myBirthDay.setHours(9); // 9 am
console.log(myBirthDay);

myBirthDay.setHours(13); // 1 pm
console.log(myBirthDay);

console.log(now.toDateString(), '--', now.toTimeString())

// ISO String very commoun to use in sending data
console.log (myBirthDay.toISOString()); 
// This will print 1974-05-09T19:00:00.000Z
// The time is set to 1 pm in the variable, and my current timezone is GMT -6 , so to string will make the same date but GMT -0 
// in this case will be 7 pm = 19

console.log (myBirthDay.toUTCString()); // prints Thu, 09 May 1974 19:00:00 GMT
console.log ('Hour of my birthday, local', myBirthDay.getHours()); // prints 13, 1 pm local time
console.log ('Hour of my birthday, local', myBirthDay.getUTCHours()); // prints 19, 7 pm UTC time

myBirthDay.setUTCHours(20); // Set UTC hour to 8 pm, 
console.log(myBirthDay.getHours()) // Get hours in local time  = 14 , 2 pm

// Elapsed time

let startMs = Date.now();
let endMs = 0;
let elapsedMs = 0;
setTimeout(() => {
    endMs = Date.now()
    elapsedMs = endMs - startMs;
    console.log ('Elapsed time in milliseconds', elapsedMs);
} , 2000);

// Other way is getting the date objects getTime
let start = new Date();
// Code to measure
for (let i = 0; i < 10000000 ; i++) {
    let v = 0;
}
let end = new Date();
let elapsed = end.getTime() - start.getTime() // elapsed time ms
console.log ('time in milliseconds', elapsed);






