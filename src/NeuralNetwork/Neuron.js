class Neuron {
  x = null;
  y = null;
  t = null;
  w = null;
  q = null;

  constructor(w, q) {
    this.w = w;
    this.q = q;
  }

  setY = (y) => {
    this.y = y;
  };

  getY = () => {
    return this.y;
  };

  setX = (x) => {
    this.x = x;
  };

  getX = () => {
    return this.x;
  };

  setT = (t) => {
    this.t = t;
  };

  getT = () => {
    return this.t;
  };

  setQ = (q) => {
    this.q = q;
  };

  getQ = () => {
    return this.q;
  };

  setW = (w) => {
    this.w = w;
  };

  getW = () => {
    return this.w;
  };

  findY = () => {
    this.y = this.x * this.w;
  };

  findNextW = () => {
    this.w = this.w + this.q * this.x * (this.t - this.y);
  };
}

export default Neuron;
