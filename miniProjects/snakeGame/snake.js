class Game {
  constructor(){
    this.snake;
    this.speed = 200;
    this.score = 0;
    this.level = 0;
    this.food = "";
  }

  renderGrid() {
    var $grid = $("<div></div>");

    for(var row = 0; row < 40; row++) {
        for (var column = 0; column < 40; column++){
            $('#container').append('<div class=cells id=c_'+row+'_'+column+'></div>');
        }
        $('#container').append("<br>");
    }

    $grid.appendTo($("#container"));
  }

  renderSnake(){
    this.snake = new Snake
  }

  generatefood(){
      var x = Math.floor(Math.random() * 19);
      var y = Math.floor(Math.random() * 19);
      $('#c_' + x + '_' + y).addClass('food');
      this.food = x + '_' + y;
  }

}

class Snake {
  constructor(){
    this.position = ["20_20", "20_19", "20_18"]
    this.direction = 4;
    this.head;
    this.tail;
    this.currentRow;
    this.currentCol;
  }

  reset(){
      this.position = ["20_20", "20_19", "20_18"];
      this.dir = 4;
      super.food = "";
      super.speed = 200;
      super.score = 0;
      super.level = 0;
  }

  go(){
    this.tail = this.position.pop();
    $('#c_'+this.tail).removeClass('snake');
    this.head = this.position[0].split('_');
    this.currentRow = parseInt(this.head[0]);
    this.currentCol = parseInt(this.head[1]);
    $('#c_' + this.currentRow + '_' + this.currentCol).addClass('snake');
    switch(this.direction){
      case 1: this.currentRow += 1; break;
      case 2: this.currentCol -= 1; break;
      case 3: this.currentRow -= 1; break;
      case 4: this.currentCol += 1; break;
    }
    this.currentLocation = this.currentRow + "_" + this.currentCol;

    if (this.currentLocation === super.food) {
      this.position.push(this.tail);
      super.score += 1;

      $('#score').text(super.points);
      $('#c_' + this.tail).addClass('snake');
      $('#c_' + super.food).removeClass('food');
      generatefood();
    }

    this.position.unshift(this.currentLocation);
    if (this.currentCol < 0 || this.currentRow < 0 || this.currentCol > 39 || this.currentRow > 39 || $('#c_'+this.currentLocation).hasClass('snake')){
      console.log(this.currentCol, this.currentRow)
      alert('You lost !');
      this.reset()
    } else {
      $('#c_' + this.currentLocation).addClass('snake');
      setTimeout(function(){ go() }, super.speed);
    }

  } // end go function

} // end Snake class



var newGame = new Game;
newGame.renderGrid();
newGame.renderSnake();
newGame.generatefood();
newGame.snake.go();


$(document).keypress(function(e){
    e.preventDefault();
    switch(e.key){
      case  "ArrowDown": dir = 1; break;
      case  "ArrowLeft": dir = 2; break;
      case    "ArrowUp": dir = 3; break;
      case "ArrowRight": dir = 4; break;
    }
});
