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




