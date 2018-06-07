//

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return 'Cześć. Jestem ' + this.name + '!';
        return `Hi. Ja jestem ${this.name}!`;
    }
    getDescription() {
        //return 'Cześć. Jestem ' + this.name + '!';
        return `${this.name} ma ${this.age} lat.`;
    }
}

const me = new Person('Filip Podsiadły', 27);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());