const Controller = function() {
  this.down = new Controller.ButtonInput();
  this.left = new Controller.ButtonInput();
  this.right = new Controller.ButtonInput();
  this.up = new Controller.ButtonInput();

  this.keyDownUp = function(e) {
    let down = (e.type == 'keydown') ? true : false;

    switch(e.keyCode) {
      case 37: this.left.getInput(down); break;
      case 38: this.up.getInput(down); break;
      case 39: this.right.getInput(down); break;
      case 40: this.down.getInput(down);
    }
    alert(`You pressed a key (${e.keyCode})!`);
  };
  this.handleKeyDownUp = (e) => {this.keyDownUp(e);};
}

Controller.prototype = {
  constructor: Controller
}
Controller.ButtonInput = function() {
  this.active = this.down = false;
}
Controller.ButtonInput.prototype = {
  constructor: Controller.ButtonInput,
  getInput: function(down) {
    if (this.down != down) this.active = down;
    this.down = down;
  }
}