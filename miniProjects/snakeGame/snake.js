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

}

class Snake {
  constructor(){
    this.direction = 'r';
    this.position = ["20_20", "20_19", "20_18"]
    this.tail = this.position.pop();
    this.head = this.position[0].split('_');
    var row = parseInt(this.head[0]);
    var col = parseInt(this.head[1]);
    $('#c_' + row + '_' + col).addClass('snake');
  }

}


function generatefood(){
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    $('#c_' + x + '_' + y).addClass('food');
}

function startGame(){
  var newGame = new Game();
  newGame.renderGrid();
  newGame.renderSnake()
}

startGame();
