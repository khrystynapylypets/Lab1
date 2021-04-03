import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis, LineSeries, ScatterSeries, ValueAxis, Chart
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const ChartBla = (props) => {
  const { chartData } = props;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '30px'
    }}>
      <Paper>
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
          <Animation />
        </Chart>
      </Paper>
    </div>
  );
};

export default ChartBla;
