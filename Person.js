// sub class of GameObject: is specific to the people that
// we see hanging out and moving around the map
class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 32;
    // TODO: Maybe this object can go outside the class?
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    this.updatePosition();
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }
}
