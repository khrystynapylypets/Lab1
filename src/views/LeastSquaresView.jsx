import React from 'react';
import Chart from './Chart';

import { dataSet } from '../data';
import { leastSquaresMethod, generatePoints } from '../methods/leastSquares';

const LeastSquaresView = () => {
  const coefficients = leastSquaresMethod(dataSet);
  const functionPoints = generatePoints(dataSet, coefficients);

  const chartData = [
    ...dataSet,
    ...functionPoints,
  ];

  return (
    <Chart chartData={chartData} />
  );
};

export default LeastSquaresView;
