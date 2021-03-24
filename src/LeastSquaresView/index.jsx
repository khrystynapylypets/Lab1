import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ScatterSeries,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { dataSet } from './data';
import { leastSquaresMethod, generatePoints } from './methods';

const LeastSquaresView = () => {
  const coefficients = leastSquaresMethod(dataSet);
  const functionPoints = generatePoints(dataSet, coefficients);

  const chartsData = [
    ...dataSet,
    ...functionPoints,
  ];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '30px'
    }}>
      <Paper>
        <Chart
          data={chartsData}
        >
          <ArgumentAxis showGrid />
          <ValueAxis />
          <ScatterSeries
            valueField='y'
            argumentField='x'
          />
          <LineSeries
            valueField='y1'
            argumentField='x1'
          />
          <Animation />
        </Chart>
      </Paper>
    </div>
  );
};

export default LeastSquaresView;