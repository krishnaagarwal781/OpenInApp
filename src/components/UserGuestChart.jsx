"use client";
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const UserGuestChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Sample data for user and guest counts over weeks
    const data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      datasets: [
        {
          label: 'Users',
          backgroundColor: 'rgba(152, 216, 158, 1)',
          borderColor: 'rgba(152, 216, 158, 1)',
          borderWidth: 1,
          data: [50, 65, 80, 45, 60],
        },
        {
          label: 'Guests',
          backgroundColor: 'rgba(238, 132, 132, 1)',
          borderColor: 'rgba(238, 132, 132, 1)',
          borderWidth: 1,
          data: [30, 45, 60, 35, 50],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div style={{ width: '80%',height:'90%', margin: 'auto' }}>
      <canvas ref={chartRef} id="userGuestChart"></canvas>
    </div>
  );
};

export default UserGuestChart;
