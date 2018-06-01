console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands',
    options: ['One', 'Two']

};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);
var user = {
    name: 'Filip',
    age: '28',
    location: 'Łódź'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Wiek: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);