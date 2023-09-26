import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      data: [55, 31, 14], // Replace these values with your percentages
      backgroundColor: ['#EE8484', '#98D89E', '#F6DC7D'], // Customize the colors
      hoverBackgroundColor: ['#EE8484', '#98D89E', '#F6DC7D'],
    },
  ],
};

const options = {
    plugins: {
        legend: {
          display: false,
        },
      },
};

const DoughnutChart = () => {
  return (
        <div style={{ width: '50%',height:'50%', margin: 'auto' }}>
            <Doughnut data={data} options={options}/>
        </div>
  )
};

export default DoughnutChart;
