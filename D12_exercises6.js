// Factory and contructor function and test for EQUAL and SAME


// Factory function
function createAddress (street, city, zipCode) {
    return {
        street : street,
        city : city,
        zipCode : zipCode
    }
}

// Constructor function
function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
// Or in ES5 and on
class AddressClass {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}

function areEqual (address1, address2) {
  
    return address1.street === address2.street &&
            address1.city === address2.city &&
            address1.zipCode === address2.zipCode;
}

function areSame (address1, address2) {
    return address1 === address2;
}

let addr1 = new Address ('street 1', 'miami', '31101');
let addr2 = new Address ('street 1', 'miami', '31101');
let addr3 = addr1;

console.log (areEqual(addr1,addr2));
console.log (areSame(addr1,addr2));
console.log (areSame(addr1,addr3));

let addr4 = new AddressClass('new','orlando','31111');
let addr5 = new AddressClass('new','orlando','31111');
console.log(addr4);
console.log(areEqual(addr4,addr5));


