//Object destructuring

const person = {
  //name: "Filip",
  age: 28,
  location: {
    city: "Łódź",
    temp: 20
  }
};

const { name: firstName = 'Anonymouse', age } = person;  //default is no value
//const name = person.name;
//const age = person.age;
//console.log(`${person.name} is ${person.age}.`);

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;  //rename
if (city && temperature) {
  console.log(`Its's ${temperature} in ${city} `);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); //Penguin or defaut Self-Published

//Array destructuring

const address = ['1299 S Juniper Street', 'Lodz', 'Lodzkie', '19147'];

const [, cities, state = 'New York'] = address;  //default value

//console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${cities} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item1, , item3] = item;
console.log(`A medium ${item1} costs ${item3}`);