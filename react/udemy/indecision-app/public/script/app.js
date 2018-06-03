'use strict';

var add = function add(a, b) {
    //  console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1000));

//this

var user = {
    name: 'Filip',
    cities: ['Łódź', 'Aleksandrów', 'Zgierz'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' mieszka w ' + city;
        });
    }
};
console.log(user.printPlacesLived());

//

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());
