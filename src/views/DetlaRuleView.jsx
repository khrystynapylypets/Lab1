import React from 'react';
import Chart from './Chart';

import { deltaRuleMethod } from '../methods/deltaRule';

const DeltaRuleView = () => {
  const chartData = deltaRuleMethod(0.1, 0.4)

  return (
    <Chart chartData={chartData} />
  );
};

export default DeltaRuleView;
