import React from 'react';
import _ from 'lodash';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, LineSeries, ScatterSeries, ValueAxis, Chart } from '@devexpress/dx-react-chart-material-ui';


import { min, max, points } from './data';
import { deltaRuleMethod } from '../methods/deltaRule';

const DeltaRuleView = () => {
  const { resultData, w, resultPoints } = deltaRuleMethod(0.1, 0.5, min, max, points);

  return (
    <div style={{
        margin: '30px'
    }}>
      <div style={{
        margin: '30px'
      }}>
        <div>Коефіцієнти</div>
        <div>w: 0.1</div>
        <div>q: 0.5</div>
      </div>
      <Paper style={{
        width: '600px'
      }}>
        <Chart
          data={resultData}
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
          <LineSeries
            valueField='y2'
            argumentField='x2'
          />
          <LineSeries
            valueField='y3'
            argumentField='x3'
          />
        </Chart>
      </Paper>
      <div style={{
        margin: '30px'
      }}>
        <div>{`w: ${w}`}</div>
        <div >
          {_.map(resultPoints, ({ x3, y3 }) => (<div>{`x = ${x3}   y = ${y3}`}</div>) )}
        </div>
      </div>
    </div>
  );
};

export default DeltaRuleView;
