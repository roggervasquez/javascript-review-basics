const circle = {
    radius : 1,
    x : 10,
    y : 15,
    draw () {
        console.log('Draw a circle');
    }
}

// First way .. iterating through each property
const circle2 = {};
for (let key in circle) {
    circle2[key] = circle[key];
}
console.log(circle2);

// Using assign
const circle3 = Object.assign ({} , circle); // First argument is the target and that anonymous object is returned
circle3.radius = 33;
// or can be an existing object and properties will be merged for example
const circle4 = Object.assign ( { color : 'red'} , circle3);
console.log(circle4);

// using the spread operator now in ES6

const circle5 = { ...circle }; // Expands the object where is called
console.log(circle5);

// So we can do things like this
const otherObject = { 
    value : 14,
    name : 'test'
};
const circle6 = { ...circle4, ...otherObject }; // But objects properties are merged
console.log('Circle6' ,circle6);

