import React from 'react';
import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, Chart, LineSeries, ScatterSeries, ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import { deltaRuleMethod } from './methods';

const DeltaRuleView = () => {
  const data = deltaRuleMethod(0.1, 0.4)

  return (
    <div style={{
      maxWidth: '600px',
      margin: '30px'
    }}>
      <Paper>
        <Chart
          data={data}
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

export default DeltaRuleView;
