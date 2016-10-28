var display = document.getElementById('display');
display.value = "";
var stack = '0';


function numberClick(e){
  var num = e.innerHTML,
      last = stack[stack.length-1];

  if( Number(last) || last === '0' ){
    console.log('top')
    display.value+=num;
  } else {
    display.value = num;
  }
}

function operatorClick(e){
  var operator = e.innerHTML;
  stack += display.value+operator;
}


function equal(){
  stack += display.value;
  display.value = eval(stack);
  stack = '';
}

