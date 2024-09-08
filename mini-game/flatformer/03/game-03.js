const Game = function() {
  this.world = new Game.World();
  this.update = function() {
    this.world.update();
  };
};

Game.prototype = {
  constructor: Game
};

Game.World = function(friction = 0.9, gravity = 3) {
  this.friction = friction;
  this.gravity = gravity;

  this.player = new Game.World.Player();
  this.columns   = 12;
  this.rows      = 9;
  this.tile_size = 16;
  this.map = [49,18,18,18,50,49,19,20,17,18,36,37,
              11,40,40,40,17,19,40,32,32,32,40, 8,
              11,32,40,32,32,32,40,13, 6, 6,29, 2,
              36, 7,40,40,32,40,40,20,40,40, 9,10,
               3,32,32,48,40,48,40,32,32, 5,37,26,
              11,40,40,32,40,40,40,32,32,32,40,38,
              11,40,32, 5,15, 7,40,40, 4,40, 1,43,
              50, 3,32,32,12,40,40,32,12, 1,43,10,
               9,41,28,14,38,28,14, 4,23,35,10,25];

  this.height = this.tile_size * this.rows;
  this.width  = this.tile_size * this.columns;
};

Game.World.prototype = {
  constructor: Game.World,

  collideObject: function(object) {
    if (object.x < 0) {
      object.x = 0;
      object.velocity_x = 0;
    }
    else if (object.x + object.width > this.width) {
      object.x = this.width - object.width;
      object.velocity_x = 0;
    }
    if (object.y < 0) {
      object.y = 0;
      object.velocity_y = 0;
    }
    else if (object.y + object.height > this.height) {
      object.jumping = false;
      object.y = this.height - object.height;
      object.velocity_y = 0;
    }
  },

  update: function() {
    this.player.velocity_y += this.gravity;
    this.player.update();

    this.player.velocity_x *= this.friction;
    this.player.velocity_y *= this.friction;
    this.collideObject(this.player);
  }
};

Game.World.Player = function(x, y) {
  this.color1     = "#404040";
  this.color2     = "#f0f0f0";
  this.height     = 12;
  this.jumping    = true;
  this.velocity_x = 0;
  this.velocity_y = 0;
  this.width      = 12;
  this.x          = 100;
  this.y          = 50;
}

Game.World.Player.prototype = {
  constructor: Game.World.Player,

  jump: function() {
    if (!this.jumping) {
      this.jumping = true;
      this.velocity_y -= 20;
    }
  },

  moveLeft:function() {this.velocity_x -= 0.5;},
  moveRight:function() {this.velocity_x += 0.5;},

  update: function() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }
};