const sayHello = require('./say-hello');

require('./styles/main.scss');
 
sayHello('Art', document.querySelector('h2'));

var imgElement = document.createElement('img');
 
imgElement.src = require('./images/random.jpg');
 
document.body.appendChild(imgElement);