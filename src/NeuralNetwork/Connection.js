class Connection {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.weight = Math.random();
    this.change = 0;
  }

  toJSON() {
    return {
      change: this.change,
      weight: this.weight,
      from: this.from.id,
      to: this.to.id,
    };
  }

  setWeight(value) {
    this.weight = value;
  }

  setChange(value) {
    this.change = value;
  }
}

export default Connection;