class DirectionInput {
  constructor() {
    this.heldDirections = [];

    this.map = {
      ArrowUp: "up",
      KeyW: "up",
      ArrowDown: "down",
      KeyS: "down",
      ArrowLeft: "left",
      KeyA: "left",
      ArrowRight: "right",
      KeyD: "right",
    };
  }
  // NOTE: The get syntax binds an object property to a function that will be called when that property is looked up.
  // more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  get direction() {
    return this.heldDirections[0];
  }

  init() {
    // when we enter into the array
    document.addEventListener("keydown", (e) => {
      const dir = this.map[e.code];

      // if we find a valid direction and this direction doesn't exist in our array yet
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        // unshift will append new values at the start of the array
        this.heldDirections.unshift(dir);
        console.log(this.heldDirections);
      }
    });
    // when we exit into the array
    document.addEventListener("keyup", (e) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        // it will look for the index position in the array, and delete 1 element
        this.heldDirections.splice(index, 1);
        console.log(this.heldDirections);
      }
    });
  }
}
