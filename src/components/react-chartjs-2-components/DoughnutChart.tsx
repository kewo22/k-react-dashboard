import React from 'react'
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, DoughnutControllerChartOptions, CoreChartOptions, DoughnutController, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// interface DoughnutProps {
//   options: ChartOptions<'doughnut'>;
//   data: ChartData<'doughnut'>;
// }

export default function DoughnutChart() {

  const data: ChartData<'doughnut'> = {
    labels: ['Resolved', 'Unresolved'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 6],
        backgroundColor: [
          '#0a70fd',
          '#f4f4f4',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        // ],
        borderWidth: 0,
      },
    ],
  };

  // ChartOptions
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.5,

    cutout: 85,
    // radius: 17,

    plugins: {
      legend: {
        display: true,
        position: 'left' as const,
        // title: {
        //   display: true,
        //   text: "Time (s)",
        // font: {
        //   size: 10
        // }
        // },
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          font: {
            size: 14
          },
        },
        onClick: function (e: any) {
          e.native?.preventDefault();
          e.native?.stopPropagation();
        }
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
      arc: {
        borderRadius: 7
      },
    },

    scales:{
      
    }


  }


  return (

    <div style={{ height: '250px', width: '500px' }} >
      <Doughnut data={data} options={options} />
    </div>

  )
}
