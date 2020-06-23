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