import React from 'react';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Loyal Customers',
        data: [10, 20, 10, 40, 50, 60],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'New Customers',
        data: [15, 55, 35, 45, 70, 65],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Old Customers',
        data: [5, 15, 75, 35, 25, 5],
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 6, // Limit the number of visible labels
        },
      },
    },
  };

  return (
    <div className="w-full  bg-greyblack rounded-lg p-2">
      <div className="">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
