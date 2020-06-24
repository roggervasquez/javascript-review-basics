// Show Stars exercise

showStars (15);

function  showStars(stars) {
   
    for (let i = 1 ; i <= stars ; i++) {
        let message = '';
        for (let j=1; j <= i ; j++) {
            message = message + '*';
        }
        console.log(message);
    }
}

showPrimes(20);
function showPrimes(limit) {
   for (let i=1 ; i<=limit ; i++){
       if (isPrimeImproved(i)) {
           console.log(i);
       }
   }
}

// Naive solution to see if a number is prime

function isPrimeNaive(number) {
    
    if (number === 1) return true; // special case

    const roof = Math.floor(number / 2);
    for(let i=2 ; i<= roof ; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function isPrimeImproved (number) {
    if (number === 1) return true; // special case
    if (number % 2 ===0) return false ; //Even numbers are not prime
    
    const roof = Math.floor(Math.sqrt(number));
    for (let i = 3 ; i < roof ; i++ ) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}