import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, LineSeries, ScatterSeries, ValueAxis, Chart } from '@devexpress/dx-react-chart-material-ui';

import { dataSet, points } from './data';
import { leastSquaresMethod, generatePoints } from '../methods/leastSquares';
import _ from "lodash";

const LeastSquaresView = () => {
  const coefficients = leastSquaresMethod(dataSet);
  const functionPoints = generatePoints(dataSet, coefficients);

  const chartData = [
    ...dataSet,
    ...functionPoints,
  ];

  const resultPoints = generatePoints(points, coefficients);

  return (
    <div style={{
      margin: '30px'
    }}>
      <div style={{
        margin: '30px'
      }}>
        <div>Коефіцієнти</div>
        <div>{`a: ${coefficients.a}`}</div>
        <div>{`b: ${coefficients.b}`}</div>
      </div>
        <Paper style={{
          width: '600px'
        }}>
          <Chart
            data={chartData}
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
          </Chart>
        </Paper>
        <div style={{
          margin: '30px'
        }}>
          {_.map(resultPoints, ({ x1, y1 }) => (<div>{`x = ${x1}   y = ${y1}`}</div>) )}
        </div>
    </div>
  );
};

export default LeastSquaresView;
