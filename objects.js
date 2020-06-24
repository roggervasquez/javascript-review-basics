// Concept of object, factory functions
// Simple object with functions , not really good but possible

const circle = {
    radius : 1 ,
    location : {
        x : 1,
        y: 1
    },
    draw : function () {
        console.log ('draw circle');
    }
}
circle.draw();


// Factory functions

function createCircle (radius, x, y) {
    return {
       radius : radius,
       location : {
           x: x,
           y: y,
       },
       draw() {
           console.log(`Circle radius:${radius} , x:${x}, y:${y} `);
       }
    }
}

const circle1 = createCircle (5,1,1);
const circle2 = createCircle (3,2,5);

console.log(circle1);
console.log(circle2);

circle1.draw();
circle2.draw();

// Constructor, 
// Camel case for Methods but Pascal Case for Constructor, First Capital letter

function Rectangle (height, width){
    this.height = height;
    this.width = width;
    this.draw = function () {
        console.log ('Drawn Rectangle', height, width);
    }
    return this;  // Is not necessary but explicitly makes it clear
}

const rectangle1 = new Rectangle(10,20);
rectangle1.draw();
// add properties dynamically
rectangle1.newProperty = 'something';
console.log(rectangle1);
delete rectangle1.newProperty;
console.log(rectangle1);

// rectangle1 = new Rectangle(1,1);  // this will generate an error, rectangle1 is Const, 
                                  // so it cannot be assigned but we can actually modify its internals


// Object and function constructors that javascript already provides

let obj = {} ; // Is equivalent internally to  let obj = new Object();
console.log(obj.constructor); // Shows that function used to create the object

// Under the hood Javascript basically uses Call for a function passing the arguments
const r = Rectangle.call({}, 2,3); // height =2. width = 3
console.log(r);
// or
const r2 = Rectangle.apply({} , [2,3]) ; // We pass the arguments in array
console.log(r2);

// Primitive types copy by Value and Objects by reference
// Value Types:  Number, String, Boolean, Symbol,  null, undefined
// Reference Types : Object, Function, Array
let x = 10;
let y = x ;
x = 20 ;
console.log (x,y) ;  // Copied by value, there are independent

let x1 = { value:10 };
let y1 = x1 ;
x1.value = 20 ;
console.log (x1,y1) ;  // Copied by Reference, points to same address of memory, both will print 20

// Same as passing in as arguments to a function 
let number = 10;
function increment(number) {  // Receive as a value parameter
    number++;
}
increment(number); // Pass number as argument
console.log(number); // will still print 10

let number1 =  { value:10 };
function increment1(number) {  // Receive as a referece parameter
    number.value++;
}
increment1(number1); // Pass number as argument
console.log(number1); // will print 11







