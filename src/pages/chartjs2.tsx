import React from 'react'
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function ReChartJs2() {

    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    // const labels = Utils.months({ count: 7 });
    const labels = [['Ceramic', 'Core', 'Making'], 'Batch Operation', 'Ceramic Core Flaring', 'Wax Pattern Moulding', 'Primary Slurry Dripping'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    [0, 100],
                    [100, 170],
                    [170, 200],
                    [200, 300],
                    [300, 410]
                ],
                backgroundColor: ['#7b61ff', '#0a70fd', '#1cce67', '#ff8e50', '#ff6263'],
                barThickness: 10,
            },
            // {
            //     label: 'Dataset 2',
            //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };

    const options: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderRadius: 20,
                borderSkipped: false,
                base: 100
            },
        },
        plugins: {
            legend: {
                display: false,
                // position: 'bottom' as const,
            },
            title: {
                // display: true,
                // text: 'Chart.js Bar Chart',
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
                }
            },
        },
    };

    return (
        <div style={{ height: '300px', width: '500px' }} >
            <Bar options={options} data={data} />
        </div >
    )
}
