/* const square = function (x) {
    return x * x;
};

console.log(square(3));

 const squareArrow = (x) => {
    return x * x;
}; 

const squareArrow = (x) => x * x;

console.log(squareArrow(4)); */

const Name = 'Filip Podsiadły';

const getFirstName = (Name) => {
    return Name.split(' ')[0];
}

console.log(getFirstName(Name));

const getFirstNameArrow = Name => Name.split(' ')[0];
console.log(getFirstNameArrow(Name));

// firstName = fullName.split(' ')[0];