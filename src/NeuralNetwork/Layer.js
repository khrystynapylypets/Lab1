import _ from 'lodash';
import Neuron from './Neuron';

class Layer {
  constructor(numberOfNeurons) {
    const neurons = [];

    for(let index = 0; index < numberOfNeurons; index++) {
      const newNeuron = new Neuron();
      neurons.push(newNeuron);
    }

    this.neurons = neurons;
  }

  toJSON() {
    return _.map(this.neurons, (neuron) => neuron.toJSON());
  }
}

export default Layer;