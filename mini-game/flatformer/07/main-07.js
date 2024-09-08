window.addEventListener('load', function(e) {
  "use strict";

  const ZONE_PREFIX = "07/zone";
  const ZONE_SUFFIX = ".json";

  const AssetsManager = function() {
    this.tile_set_image = undefined;
  }

  AssetsManager.prototype = {
    constructor: Game.AssetsManager,
    requestJSON: function(url, callback) {
      let request = new XMLHttpRequest();
      request.addEventListener('load', function(e) {
        callback(JSON.parse(this.responseText));
      }, {once: true});

      request.open("GET", url);
      request.send();

    },

    requestImage: function(url, callback) {
      let image = new Image();

      image.addEventListener("load", function(e) {
        callback(image);
      }, {once: true});

      image.src = url;
    },
  };

  let keyDownUp = function(e) {
    controller.keyDownUp(e.type, e.keyCode);
  };

  let resize = function(e) {
    display.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, game.world.height / game.world.width);
    display.render();

    let rectangle = display.context.canvas.getBoundingClientRect();

    p.style.left = rectangle.left + "px";
    p.style.top  = rectangle.top + "px";
    p.style.fontSize = game.world.tile_set.tile_size * rectangle.height / game.world.height + "px";
  }

  let render = function() {

    let frame = undefined;

    display.drawMap   (assets_manager.tile_set_image,
      game.world.tile_set.columns, game.world.graphical_map, game.world.columns,  game.world.tile_set.tile_size);

    for (let index = game.world.carrots.length - 1; index > -1; -- index) {
      let carrot = game.world.carrots[index];
      frame = game.world.tile_set.frames[carrot.frame_value];

      display.drawObject(assets_manager.tile_set_image,
      frame.x, frame.y,
      carrot.x + Math.floor(carrot.width * 0.5 - frame.width * 0.5) + frame.offset_x,
      carrot.y + frame.offset_y, frame.width, frame.height);
    }

    frame = game.world.tile_set.frames[game.world.player.frame_value];

    display.drawObject(assets_manager.tile_set_image,
      frame.x, frame.y,
      game.world.player.x + Math.floor(game.world.player.width * 0.5 - frame.width * 0.5) + frame.offset_x,
      game.world.player.y + frame.offset_y, frame.width, frame.height);
    
    for (let index = game.world.grass.length - 1; index > -1; -- index) {
      let grass = game.world.grass[index];
      frame = game.world.tile_set.frames[grass.frame_value];

      display.drawObject(assets_manager.tile_set_image,
      frame.x, frame.y,
      grass.x + frame.offset_x,
      grass.y + frame.offset_y, frame.width, frame.height);
    }

    p.innerHTML = "Carrots: " + game.world.carrot_count;

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

    if (game.world.door) {
      engine.stop();

      assets_manager.requestJSON(ZONE_PREFIX + game.world.door + ZONE_SUFFIX, (zone) => {
        game.world.setup(zone);
        engine.start();
      });

      return;
    }
  };

  let assets_manager = new AssetsManager();
  let controller = new Controller();
  let display = new Display(document.querySelector("canvas"));
  let game = new Game();
  let engine = new Engine(1000/30, render, update);

  let p = document.createElement("p");
  p.setAttribute("style", "color:#c07000; font-size:2.0em; position:fixed;");
  p.innerHTML = "Carrots: 0";
  document.body.appendChild(p);

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;
  display.buffer.imageSmoothingEnabled = false;

  assets_manager.requestJSON(ZONE_PREFIX + game.world.zone_id + ZONE_SUFFIX, (zone) => {
    game.world.setup(zone);
    assets_manager.requestImage("rabbit-trap.png", (image) => {
      assets_manager.tile_set_image = image;
      resize();
      engine.start();
    });
  });

  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);
  this.window.addEventListener('resize', resize);
})