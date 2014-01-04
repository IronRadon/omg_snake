(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function() {
    this.direction = 83;
    this.segments = [new SnakeGame.Coord(0,0)];
    this.tail = this.segments[0];
  };

  Snake.DIRS = {
     87 : new SnakeGame.Coord(-1,0),
     83 : new SnakeGame.Coord(1, 0),
     68 : new SnakeGame.Coord(0, 1),
     65 : new SnakeGame.Coord(0,-1)
  };

  Snake.prototype.move = function(){
    this.segments.unshift(this.segments[0].plus(Snake.DIRS[this.direction]));
    this.tail = this.segments.pop();
  }

  Snake.prototype.turn = function(dir){
    this.direction = dir;
  }

})(this);