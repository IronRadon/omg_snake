(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Coord = SnakeGame.Coord = function(x,y) {
    this.x = x,
    this.y = y
  };

  Coord.prototype.string = function(){
    return "" + this.x + "," + this.y;
  }

  Coord.prototype.plus = function(coord){
    return new Coord((this.x + coord.x), (this.y + coord.y));
  };

})(this);