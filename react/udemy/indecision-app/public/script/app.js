'use strict';

console.log('App.js is running!');

//

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'

};

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);
// Stworzyc a template two with  var jsx expression
var user = {
    name: 'Filip',
    age: '28',
    location: 'Łódź'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Wiek: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Miasto: ',
        user.location
    )
);

//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
