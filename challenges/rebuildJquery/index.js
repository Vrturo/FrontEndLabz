class SweetSelector {

  select(str){
    if( str[0] === '#' ) return document.getElementById( str.substring(1, str.length) );
    if( str[0] === '.' ) return document.getElementsByClassName( str.substring(1, str.length) );
    return document.getElementsByTagName( str );
  }

}
var ss = new SweetSelector();
console.log(ss.select('.container'))
console.log(ss.select('#fade1'))
console.log(ss.select('div'))
