(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(el) {
    this.snake = new SnakeGame.Snake();
    this.apples = this.makeApples(4);
  };

  Board.prototype.makeApples = function(numApples){
    var apples = [];
    for(var i = 0;i< numApples;i++){
      apples.push(new SnakeGame.Coord(
        Math.floor(Math.random() * 9), Math.floor(Math.random()*9)));
    }
    return apples;
  }

})(this);