class Overworld {
  constructor(config) {
    this.element = config.element; // we are gonna pass in an element for the Overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // from the element we are gonna grab the canvas tag and save it here
    this.ctx = this.canvas.getContext("2d"); // We are going to draw into the canvas a lot, so better to save this as a reference inside the class too: this will allow us to have access to a lot of drawing methods that exist on canvas
  }
  init() {
    // if you wan to draw pixel data from a image onto a canvas context,
    // you need to load first that image into the browser in memory:
    const image = new Image();
    // once the browser creates it, it will copy those pixels into the canvas context
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "/images/maps/DemoLower.png";

    // Hero:
    const x = 5;
    const y = 6;

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(shadow, 0, 0, 32, 32, x * 16 - 8, y * 16 - 18, 32, 32);
    };
    shadow.src = "/images/characters/shadow.png";

    const hero = new Image();

    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, // left cut (x)
        0, // top cut (y)
        32, // width of cut
        32, // height of cut
        x * 16 - 8, // x position
        y * 16 - 18, // y position
        32, // size width
        32 // size height
      );
    };
    hero.src = "/images/characters/people/hero.png";
  }
}
