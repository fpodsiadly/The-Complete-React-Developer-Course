'use strict';

/* const square = function (x) {
    return x * x;
};

console.log(square(3));

 const squareArrow = (x) => {
    return x * x;
}; 

const squareArrow = (x) => x * x;

console.log(squareArrow(4)); */

var Name = 'Filip Podsiadły';

var getFirstName = function getFirstName(Name) {
    return Name.split(' ')[0];
};

console.log(getFirstName(Name));

var getFirstNameArrow = function getFirstNameArrow(Name) {
    return Name.split(' ')[0];
};
console.log(getFirstNameArrow(Name));

// firstName = fullName.split(' ')[0];
