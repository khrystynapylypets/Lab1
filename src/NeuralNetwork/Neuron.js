import { v4 as uuid } from 'uuid';
import _ from 'lodash';
import random from 'random';

class Neuron {
  constructor() {
    this.inputConnections = [];
    this.outputConnections = [];

    this.id = uuid();
    this.bias = 0;
    this.delta = 0;
    this.output = 0;
    this.error = 0;
  }

  setBias(value) {
    this.bias = value;
  }

  setOutput(value) {
    this.output = value;
  }

  setDelta(value) {
    this.delta = value;
  }

  setError(value) {
    this.error = value;
  }

  getRandomBias() {
    const min = -3;
    const max = 3
    return Math.floor(Math.random() * (+max - +min)) +min;
    // return random.int(min, max);
  }

  addInputConnection(connection) {
    this.inputConnections.push(connection)
  }

  addOutputConnection(connection) {
    this.outputConnections.push(connection)
  }

  toJSON () {
    return {
      id: this.id,
      delta: this.delta,
      output: this.output,
      error: this.error,
      bias: this.bias,
      inputConnections: _.map(this.inputConnections, value => value.toJSON()),
      outputConnections: _.map(this.outputConnections, value => value.toJSON()),
    };
  }
}

export default Neuron;
