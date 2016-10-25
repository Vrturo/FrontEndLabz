class SweetSelector {

    select(str) {
        if( str[0] === '#' ) return document.getElementById( str.substring(1, str.length) );
        if( str[0] === '.' ) return document.getElementsByClassName( str.substring(1, str.length) );
        return document.getElementsByTagName( str );
    }

}
var ss = new SweetSelector();
// console.log(ss.select('.container'))
// console.log(ss.select('#fade1'))
// console.log(ss.select('div'))

class DOM {

    hide( element ) {
        element = element.length <= 1 ? [element] : element;
        for( var i = 0; i < element.length; i++ ){
            element[i].style.display = 'none';
        }
    }

    show( element ) {
        element = element.length <= 1 ? [element] : element;
        for( var i = 0; i < element.length; i++ ){
            element[i].style.display = 'block';
        }
    }
}

var d = new DOM();
var div = ss.select('div')
console.log(d.hide(div))
console.log(d.show(div))

class EventDispatcher {

    on( element, event ) {
        element.addEventListener(event);
    }

    trigger( element, event ) {
        element.on( event );
    }
}


// AJAX using Pure JavaScript

// We can use the XMLHttpRequest (also referred to as the XHR) object to communicate with the server.
// Using XHR object, a web page can interact with interact with PHP scripts, databases, applications
// and even text files located on the server.
// By “interact” we mean that it can both send and retrieve data from those various sources.
// This interaction is typically driven by JavaScript, and a simple Ajax implementation takes place in four steps:

// 1. Create an instance of the XMLHttpRequest object
// 2. Use open() method of the XHR to specify what kind of data you want
// 3. Create a function to utilize the results
// 4. Use the XHR’s send() method to send the request
// 5. Receive the response

class AjaxWrapper {

    request( url, method, id ){
        document.getElementById(id).onclick=function(){
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onreadystatechange = function () {
                if ( xhr.readyState==4 && xhr.status==200 ){
                    document.getElementById(id).innerHTML=xhr.responseText;
                }
            }
            xhr.send();
        }
    }
}

var ex = new AjaxWrapper();

console.log( ex.request('https://baconipsum.com/api/?type=meat-and-filler', 'GET', 'home') );




