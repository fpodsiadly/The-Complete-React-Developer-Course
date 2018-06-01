console.log('App.js is running!');

//

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'

};

//JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);
// Stworzyc a template two with  var jsx expression
var user = {
    name: 'Filip',
    age: '28',
    location: 'Łódź'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Wiek: {user.age}</p>
        <p>Miasto: {user.location}</p>
    </div>
);

//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);