function renderGrid(){
  var $grid = $("<div></div>");

  for(var i = 0; i <= 40; i++) {
      for (var j = 0; j <= 40; j++){
          $("<div></div>").addClass("box").appendTo($grid);
      }
  }

  $grid.appendTo($("#container"));
}

class Game {
  constructor(){
    this.size = 20;
    this.grid = renderGrid();
    this.snake = new Snake();
  }
}

class Snake {
  constructor(){
    this.direction = 'r';
    this.position = [10, 10]
  }
}

