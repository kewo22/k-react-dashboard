import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// interface DoughnutProps {
//   options: ChartOptions<'doughnut'>;
//   data: ChartData<'doughnut'>;
// }

export default function BarChart() {

  const data: ChartData<'line'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [1, 6, 5, 10, 8, 7, 6, 7, 9, 11, 10, 11],
      fill: false,
      borderColor: '#8884d8',
      borderWidth: 1.5,
      // tension: 0.1
    }]
  };

  // ChartOptions
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.5,

    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
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
    },

    elements: {
      line: {
        // tension: 1111111110,
        // capBezierPoints: true,
        cubicInterpolationMode: 'monotone',
        // borderJoinStyle: "round",
        // borderDash: [3]
        // borderCapStyle:"square"
      },
      point: {
        radius: 1,
        hoverRadius: 5
      }
    },

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          minRotation: 45,
          font: {
            size: 10,
          }
        }
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 10,
          }
        },
        title: {
          display: true,
          text: 'Hours'
        }
      },
    },

  }

  return (

    <div style={{ height: '300px', width: '500px' }} >
      <Line options={options} data={data} />
    </div>

  )
}
