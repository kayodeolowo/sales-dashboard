import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: '  Top Customers',
      data: [10, 20, 15, 30, 25, 35],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Top Products',
      data: [20, 15, 25, 30, 35, 40],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};


const BarChart = () => {
  return (
    <div className="w-full  bg-greyblack rounded-lg p-2  md:h-[14rem]">
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};


export default BarChart;