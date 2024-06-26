import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/data')
      .then(res => {
        const chartData = {
          labels: res.data.labels,
          datasets: [{
            label: 'Data',
            data: res.data.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

        setData(chartData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
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
};

export default BarChart;
