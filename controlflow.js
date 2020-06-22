
// If else statements
let hour = 18;
if (hour >= 6 && hour < 12) {
    console.log ('Good morning');
}
else if ( hour >= 12 && hour < 18 ) {
     console.log ('Good afternoon')
}
else if (hour >= 18) {
    console.log('Good evening');
}

// Switch case
let role = 'admin';
switch (role) {
    case 'guest' :
        console.log ('Guest User');
        break;
    case 'moderator' :
        console.log('Moderator user');
        break;
    case 'admin' :
        console.log('Admin user');
        break;
    default:
        console.log('Unknown user');
}

// For loops
for (let i=10 ; i <=5 ; i++) {
    console.log ('Hello world', i);
}

for (let i=1 ; i >= 1 ; i--) {
    console.log('Hello World',i )
}

// While
let i = 10;
while (i <=5 ) {
    console.log('While', i);
    i++;
}
//Do while, i=6. So it will do it one time
do {
    console.log('Do While', i);
    i++; 
} while ( i <=5);

// Infinite loops take care for making finite

// For loops to navigate through properties and arrays
const person = {
    firstName : 'Rogger',
    lastName : 'Vasquez',
    age : 46,
    complex : {
        part1 : 12,
        part2 : false
    }
};

for (let key in person) {
    console.log (`key=${key} , value=${person[key]}`);
    if (typeof person[key] === 'object') {
        for (let internalKey in person[key]) {
            console.log ('Internal value', internalKey, person[key][internalKey]);
        }
    }
}

let colors = ['Red', 'Blue', 'Green', 2];
for (let item in colors) { // < --- in
    console.log (item, colors[item]);
}

// in ECMA SCRIPT 6 (ES6) new kind of For Of loop 
for (let item of colors) {   // <---- of
    console.log (item);
}