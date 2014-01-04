(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var View = SnakeGame.View = function(element){
    this.$el = element;
    this.board = null;
    this.makeDivs();
  };

  View.prototype.start = function() {
    this.board = new SnakeGame.Board(this.$el);
    $(window).on('keydown', this.handleKeyEvent.bind(this))
    this.step();
  };

  View.prototype.step = function(){
    that = this;
    setInterval(function(){
      that.board.snake.move();
      that.render();
    }, 250)
  }

  View.prototype.makeDivs = function(){
    for(var i = 0;i < 10;i++){
      var row = $("<div></div>");
      $(this.$el).append(row)
      for(var j = 0;j < 10;j++){
        tile = $("<div class='tile' style='background-color:blue'>.</div>");
        tile.attr("data-id", [i,j]);
        row.append(tile);
      }
    }
  };

  View.prototype.handleKeyEvent = function(e){
    this.board.snake.turn(e.keyCode);
  };

  View.prototype.render = function(){
    var head = $(this.$el).find("[data-id='" + this.board.snake.segments[0].string() + "']");
    head.css("background-color", "green");

    var tail = $("[data-id='" + this.board.snake.tail.string() + "']");
    tail.css("background-color", "blue");

    this.board.apples.forEach(function(apple){
      apple = $("[data-id='" + apple.string() + "']");
      apple.css("background-color", "red");
    })
  };

  View.prototype.collission = function(){
    this.board.apple.forEach(function(apple){
      if(apple == this.board.snake.segments[0]){
        this.board.snake.segments.push()
      }
    })
  }

})(this);