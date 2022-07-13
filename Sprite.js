// The Sprite component is the responsible that should manage everything visual
// about what we are showing on the screen and that includes; creating an image,
// copying the images and

class Sprite {
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Configure Animation and Initial State
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
  }
  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    ctx.drawImage(
      this.image,
      0,
      0, // left cut && right cut
      32,
      32, // width of cut && height of cut
      x,
      y, // positions
      32,
      32 // sizes
    );
  }
}
