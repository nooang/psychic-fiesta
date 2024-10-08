const Engine = function(time_step, update, render) {
  this.accumulated_time = 0;
  this.animationFrameRequest = undefined;
  this.time = undefined;
  this.time_step = time_step;
  this.updated = false;
  this.update = update;
  this.render = render;

  this.run = function(time_stamp) {
    this.accumulated_time += time_stamp - this.time;
    this.time = time_stamp;

    if (this.accumulated_time >= this.time_step * 3) {
      this.accumulated_time = this.time_step;
    }

    while (this.accumulated_time >= this.time_step) {
      this.accumulated_time -= this.time_step;
      this.update(time_stamp);
      this.updated = true;
    }

    if (this.updated) {
      this.updated = false;
      this.render(time_stamp);
    }
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  };
  this.handleRun = (time_step) => {this.run(time_step);};
}

Engine.prototype = {
  constructor: Engine,

  start: function() {
    this.accumulated_time = this.time_step;
    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
  },
  stop: function() {window.cancelAnimationFrame(this.animationFrameRequest);},
}