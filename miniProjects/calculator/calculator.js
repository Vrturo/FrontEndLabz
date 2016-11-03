class Calculator {
    constructor(){
        this.stack = "";
        this.current = ""; // keep track of double digits
        var display = document.getElementById('display');
        display.value = ''
    }

    numHandler(e){
        if( this.current.length < 1 ){ // if there's no current number
            display.value = e;
            this.current += e;
        } else {
            this.current += e;
            display.value = this.current;
        }
    }

    operatorHandler(e){
        if( e === 'x' ) e = '*';
        this.stack += this.current;
        this.current = '';
        this.stack += e;
    }

    equalHandler(){
        if( this.stack.length < 1 ){
            display.value = '';
        } else {
            this.stack += display.value;
            display.value = eval(this.stack);
        }
        this.stack = '';
        this.current = '';
    }

    clearHandler(){
        display.value = '';
        this.stack = '';
        this.current = '';
    }
}
document.addEventListener("DOMContentLoaded", function(){
    var calc = new Calculator,
        nums = document.getElementsByClassName('num');

    for( var i=0; i<nums.length; i++ ){ // set listeners for numbers pressed
        nums[i].addEventListener('click', function(){
            calc.numHandler(this.innerHTML);
        });
    }

    var operators = document.getElementsByClassName('operator');
    for( var j=0; j<operators.length; j++ ){ // set listeners for operators pressed
        operators[j].addEventListener('click', function(){
            calc.operatorHandler(this.innerHTML);
        });
    }

    var equal = document.getElementById('equal');
    equal.addEventListener('click', function(){ // set listener for when equal sign is pressed
        calc.equalHandler();
    });

    var clear = document.getElementById('clear');
    clear.addEventListener('click', function(){ // set listener for when equal sign is pressed
        calc.clearHandler();
    });
});
