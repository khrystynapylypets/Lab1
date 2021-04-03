import _ from 'lodash';

// dataSet param example:
// [ {x: 1, y: 5}, {x: 2, y: 4}, {x: 3, y: 5} ]

export const leastSquaresMethod = (dataSet) => {
  const dataLength = dataSet.length;

  const sum = dataSet.reduce((accumulator, pair) => ({
    x: accumulator.x + pair.x,
    y: accumulator.y + pair.y,
  }), { x: 0, y: 0 });

  const average = {
    x: sum.x / dataLength,
    y: sum.y / dataLength,
  };

  const slopeDividend = dataSet
    .reduce((accumulator, pair) => parseFloat(accumulator + ((pair.x - average.x) * (pair.y - average.y))), 0);
  const slopeDivisor = dataSet
    .reduce((accumulator, pair) => parseFloat(accumulator + (pair.x - average.x) ** 2), 0);

  const slope = slopeDivisor !== 0
    ? parseFloat((slopeDividend / slopeDivisor).toFixed(2))
    : 0;

  const coefficient = parseFloat((-(slope * average.x) + average.y).toFixed(2),
  );

  return { a: coefficient, b: slope };
};

export const generatePoints = (values, coefficients) => {
  const { a, b } = coefficients;

  return _.map(values, ({ x }) => ({ x1: x, y1: a + b * x }));
};
