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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Theis major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if (this.homeLocation) {
            gretting += ` Im visiting from ${this.homeLocation}.`;
        }
        return gretting;
    }
}

const me = new Student('Filip Podsiadły', 27, 'Computer Science');
console.log(me.getDescription());

const lol = new Traveler('Filip Podsiadły', 27, 'Aleksandrów Łódzki');
console.log(lol.getGretting());

const other = new Traveler();
//console.log(other.getGretting());