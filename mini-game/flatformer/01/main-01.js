window.addEventListener('load', function(e) {
  'use strict'

  let render = function() {
    display.renderColor(game.color);
    display.render();
  };

  let update = function() {
    game.update();
  };

  let controller = new Controller();
  let display = new Display(document.querySelector('canvas'));
  let game = new Game();
  let engine = new Engine(1000/30, render, update);

  window.addEventListener('resize', display.handleResize);
  window.addEventListener('keydown', controller.handleKeyDownUp);
  window.addEventListener('keyup', controller.handleKeyDownUp);

  display.resize();
  engine.start();
})