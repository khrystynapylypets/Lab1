import Neuron from '../NeuralNetwork/Neuron';

export const deltaRuleMethod = (w, q, min, max, points) => {
  const neuron = new Neuron(w, q);
  const resultData = [];
  const resultPoints = [];

  for (let x = min; x <= max; x += 0.001) {
    const t = x * x;
    neuron.setX(x);
    neuron.setT(t);
    neuron.findY();

    resultData.push({ x: parseFloat(x), y: parseFloat(t) });
    resultData.push({ x1: parseFloat(x), y1: parseFloat(neuron.getY()) });

    neuron.findNextW();
  }

  for (let pair of points) {
    const { x } = pair;

    const t = x * x;
    neuron.setX(x);
    neuron.setT(t);
    neuron.findY();

    resultData.push({ x2: parseFloat(x.toFixed(2)), y2: parseFloat(t.toFixed(2)) });
    resultData.push({ x3: parseFloat(x.toFixed(2)), y3: parseFloat(neuron.getY().toFixed(2)) });
    resultPoints.push({ x3: parseFloat(x.toFixed(2)), y3: parseFloat(neuron.getY().toFixed(2)) });
  }

  return { resultData, w: parseFloat(neuron.getW().toFixed(2)), resultPoints  };
};
