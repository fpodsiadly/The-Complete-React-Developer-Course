var nameVar = 'Filip';
var nameVar = 'Andrew'
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

/* function getPetName() {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
getPetName();
console.log(petName); */

const fullName = 'Filip Podsiadły';
let firstName;

if (fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);