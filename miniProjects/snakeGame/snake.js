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
    this.direction = 4;
    this.position = ["20_20", "20_19", "20_18"]
    this.tail = this.position.pop();
    this.head = this.position[0].split('_');
    var row = parseInt(this.head[0]);
    var col = parseInt(this.head[1]);
    $('#c_' + row + '_' + col).addClass('snake');
    this.location = row + "_" + col;
    switch(this.direction){
      case 1: row += 1; break;
      case 2: col -= 1; break;
      case 3: row -= 1; break;
      case 4: col += 1; break;
    }
  }

  go(){
    if (this.location === super.food) {
      this.position.push(tail);
      var points = super.score += 1;

      if (points % 100 == 0) {
        $('#level').text(super.level += 1);
        if (super.level == 5) {
          $('.cells').css('outline','none')
        }
        if (super.speed > 0) { super.speed -= 20; }
      }
      $('#score').text(super.points);
      $('#c_'+tail).addClass('snake');
      $('#c_'+super.food).removeClass('food');
      generatefood();
    }
    this.position.unshift(location);
  }

}



var newGame = new Game;
newGame.renderGrid();
newGame.renderSnake();
newGame.snake.go()

$(document).keypress(function(e){
    e.preventDefault();
    switch(e.key){
      case  "ArrowDown": dir = 1; break;
      case  "ArrowLeft": dir = 2; break;
      case    "ArrowUp": dir = 3; break;
      case "ArrowRight": dir = 4; break;
    }
});
