window.addEventListener('load', function(e) {
  "use strict";

  const AssetsManager = function() {
    this.tile_set_image = undefined;
  }

  AssetsManager.prototype = {
    constructor: Game.AssetsManager,
    loadTileSetImage: function(url, callback) {
      this.tile_set_image = new Image();
      this.tile_set_image.addEventListener('load', callback, {once: true});
      this.tile_set_image.src = url;
    }
  };

  let keyDownUp = function(e) {
    controller.keyDownUp(e.type, e.keyCode);
  };

  let resize = function(e) {
    display.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, game.world.height / game.world.width);
    display.render();
  }

  let render = function() {
    display.drawMap   (assets_manager.tile_set_image,
      game.world.tile_set.columns, game.world.map, game.world.columns,  game.world.tile_set.tile_size);

    let frame = game.world.tile_set.frames[game.world.player.frame_value];

    display.drawObject(assets_manager.tile_set_image,
      frame.x, frame.y,
      game.world.player.x + Math.floor(game.world.player.width * 0.5 - frame.width * 0.5) + frame.offset_x,
      game.world.player.y + frame.offset_y, frame.width, frame.height);

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
  };

  let assets_manager = new AssetsManager();
  let controller = new Controller();
  let display = new Display(document.querySelector("canvas"));
  let game = new Game();
  let engine = new Engine(1000/30, render, update);

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;
  display.buffer.imageSmoothingEnabled = false;

  assets_manager.loadTileSetImage("rabbit-trap.png", () => {
    resize();
    engine.start();
  })

  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);
  this.window.addEventListener('resize', resize);
})