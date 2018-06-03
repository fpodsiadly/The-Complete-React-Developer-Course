const add = (a, b) => {
    //  console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1000));

//this

const user = {
    name: 'Filip',
    cities: ['Łódź', 'Aleksandrów', 'Zgierz'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' mieszka w ' + city);
    }
};
console.log(user.printPlacesLived());

//

const multiplier = {
    numbers: [10,20,30],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());
