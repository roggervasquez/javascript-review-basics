
const circle = {
    radius : 1,
    x : 1,
    y : 1,
    draw () {
        console.log('Draw a circle');
    }
}

for (let key in circle) {
    console.log (key, circle[key]);
}

// for (let prop of circle) {  will not work because of is for iterable, circle is not
for (let key of  Object.keys(circle)) {   // But we can use Object.keys to get an array
    console.log(key) ; // will just print the keys
}
// to actually get the entries, key and value
for (let item of  Object.entries(circle)) {  
    console.log(item) ;  // But each item indeed is an array of 2 (0 key, 1 value)
}

// Other nice operator of javascript to see if an object has an specific property
let propertyName = 'radius';
if ( propertyName in circle ) console.log('Property ' + propertyName + ' exists');
propertyName = 'color' ;
if ( propertyName in circle ) console.log('Property ' + propertyName + ' exists'); // this will not be printed
