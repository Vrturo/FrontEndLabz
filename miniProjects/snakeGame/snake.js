function renderGrid(){
  var $grid = $("<div></div>");

  for(var row = 0; row <= 40; row++) {
      for (var column = 0; column <= 40; column++){
          $('#container').append('<div class=cells id=c_'+row+'_'+column+'></div>');
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


 function generatefood(){
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    $('#c_' + x + '_' + y).addClass('food');
 }
