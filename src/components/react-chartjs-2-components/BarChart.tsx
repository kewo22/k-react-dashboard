import React from 'react'
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, DoughnutControllerChartOptions, CoreChartOptions, DoughnutController, ChartData, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// interface DoughnutProps {
//   options: ChartOptions<'doughnut'>;
//   data: ChartData<'doughnut'>;
// }

export default function BarChart() {

  const data: ChartData<'bar'> = {
    labels: [
      'Supplier 1',
      'Supplier 2',
      'Supplier 3',
      'Supplier 4',
      'Supplier 5',
      'Supplier 6',
      'Supplier 7',
      'Supplier 8',
      'Supplier 9',
      'Supplier 10',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        backgroundColor: [
          '#ec84ee',
          '#0a70fd',
          '#1cce67',
          '#ff6263',
          '#01dcea',
          '#ffcc12',
          '#ff8e50',
          '#7b61ff',
          '#7b61ff',
          '#7b61ab',
        ],
        barThickness: 10,
      },
    ],
  };

  // ChartOptions
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.5,

    plugins: {
      tooltip: {
        displayColors: false,
        cornerRadius: 2,
        backgroundColor: '#474852',
        titleFont: {
          size: 10
        },
        bodyFont: {
          size: 10
        },
        callbacks: {
          title: function (context: any) {
            return context[0].label;
          },
          label: function (context: any) {
            return '78s (41%)';
          },
        }
      },
      legend: {
        display: false,
      },
    },

    elements: {
      bar: {
        borderRadius: 20,
        borderSkipped: false,
        base: 100
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 10,
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 10,
          }
        },
        title: {
          display: true,
          text: 'Number of assignments'
        }
      },
    },

  }


  return (

    <div style={{ height: '300px', width: '500px' }} >
      <Bar options={options} data={data} />
    </div>

  )
}
