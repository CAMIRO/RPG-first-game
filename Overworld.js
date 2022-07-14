class Overworld {
  constructor(config) {
    this.element = config.element; // we are gonna pass in an element for the Overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // from the element we are gonna grab the canvas tag and save it here
    this.ctx = this.canvas.getContext("2d"); // We are going to draw into the canvas a lot, so better to save this as a reference inside the class too: this will allow us to have access to a lot of drawing methods that exist on canvas
    this.map = null;
  }
  // A function that fires up every single frame (60 times a second)
  startGameLoop() {
    const step = () => {
      // Clear off the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw Lower layer
      this.map.drawLowerImage(this.ctx);

      // Draw Game Objects
      // // NOTE: The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
      // // (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
      // // more info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
        });
        object.sprite.draw(this.ctx);
      });

      // Draw Upper layer
      this.map.drawUpperImage(this.ctx);

      // Browser feature:
      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    // if you want to draw pixel data from a image onto a canvas context,
    // you need to load first that image into the browser in memory:
    // const image = new Image();
    // once the browser creates it, it will copy those pixels into the canvas context
    // image.onload = () => {
    //   this.ctx.drawImage(image, 0, 0);
    // };
    // image.src = "/images/maps/DemoLower.png";

    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
