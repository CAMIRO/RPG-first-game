class Overworld {
  constructor(config) {
    this.element = config.element; // we are gonna pass in an element for the Overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // from the element we are gonna grab the canvas tag and save it here
    this.ctx = this.canvas.getContext("2d"); // We are going to draw into the canvas a lot, so better to save this as a reference inside the class too: this will allow us to have access to a lot of drawing methods that exist on canvas
  }
  init() {
    console.log("hello from the Overworld", this);
  }
}
