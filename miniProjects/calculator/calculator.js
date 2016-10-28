var display = document.getElementById('display');
display.value = "";
var stack = '0',
    subProblems = 0;


function numberClick(e){
  var num = e.innerHTML,
      last = stack[stack.length-1];

  if( Number(last) || last === '0' ){
    display.value+=num;
  } else {
    display.value = num;
  }
}

function operatorClick(e){
  var operator = e.innerHTML;
  subProblems+=1;
  stack += display.value+operator;
}


function equal(){
  stack += display.value;
  display.value = eval(stack);
  stack = '';
}

function restart(){
  stack = '0';
  subProblems = 0;
  display.value = '0';
}

