import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => (
  <Bar
    data={data}
    options={{
      title: {
        display: true,
        text: 'Bar Chart Example',
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'right',
      },
    }}
  />
);

export default BarChart;
