import Neuron from '../NeuralNetwork/Neuron';

export const deltaRuleMethod = (w, q) => {
  const neuron = new Neuron(w, q);
  const resultData = [];
  const resultData2 = [];
  const resultData3 = [];
  const resultData4 = [];


  // треба розібратись чому тут сам такі дані опрацьовуються і як пов'язати це з попереднім методом
  for (let x = 0; x <= 1; x += 0.001) {
    const t = x * x;
    neuron.setX(x);
    neuron.setT(t);
    neuron.findY();

    resultData.push({ x: parseFloat(x), y: parseFloat(t) });
    resultData2.push({ x1: parseFloat(x), y1: parseFloat(neuron.getY()) });
  }

  for (let x = 0; x <= 1; x += 0.1) {
    const t = x * x;
    neuron.setX(x);
    neuron.setT(t);
    neuron.findY();

    resultData3.push({x: parseFloat(x), y: parseFloat(t)});
    resultData4.push({x: parseFloat(x), y: parseFloat(neuron.getY())});
  }

  return [ ...resultData, ...resultData2 ];
};
