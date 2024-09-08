window.addEventListener('load', function(e) {
  "use strict";

  let keyDownUp = function(e) {
    controller.keyDownUp(e.type, e.keyCode);
  };

  let resize = function(e) {
    display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
    display.render();
  }

  let render = function() {
    display.fill(game.world.backgroundColor);
    display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
    display.render();
  };

  let update = function() {
    if (controller.left.active) {
      game.world.player.moveLeft();
    }
    if (controller.right.active) {
      game.world.player.moveRight();
    }
    if (controller.up.active) {
      game.world.player.jump();
      controller.up.active = false;
    }
    game.update();
  }

  let controller = new Controller();
  let display = new Display(document.querySelector("canvas"));
  let game = new Game();
  let engine = new Engine(1000/30, render, update);

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;

  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);
  this.window.addEventListener('resize', resize);

  resize();
  engine.start();
})