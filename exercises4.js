

function sumMultiples3And5Typical (limit) {
    let steps = 0;
    let sum = 0;

    for (let i = 0; i <= limit ; i++) {
        if ( i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
        steps++;
    }
    console.log ('Sum ', sum);
    console.log('Code steps', steps);

}

// More efficient in less steps to consider in code, both still are O(n) but constant is lower O(n/2)
function sumMultiples3And5 (limit) {
    let steps = 0;
    let sum3 = 0;
    let sum5 = 0;

    let countSum3 = Math.floor (limit / 3);
    let countSum5 = Math.floor (limit / 5);
    for (let i = 1 ; i <= countSum3 ; i++) {
        sum3 += i * 3;
        steps++;
    }
    for (let i = 1 ; i <= countSum5 ; i++) {
        if ( !((i * 5) % 3 === 0) )  // So to not double count the ones that also multiples of 3 , ones in common like 15 for exmaple
            sum5 += i * 5;
        steps++;
    }
    console.log ('Sum ', sum3 + sum5);
    console.log('Code steps', steps);

}

sumMultiples3And5(1000);
sumMultiples3And5Typical (1000);
// 3,6,9,12, 15 =  45
// 5,10,15   = 30