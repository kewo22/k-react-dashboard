import React from 'react'
import DefaultLayout from '../layouts/Default';
import FloatingChart from '../components/react-chartjs-2-components/FloatingChart';
import DoughnutChart from '../components/react-chartjs-2-components/DoughnutChart';
import BarChart from '../components/react-chartjs-2-components/BarChart';
import LineChart from '../components/react-chartjs-2-components/LineChart';

export default function ReChartJs2() {

    return (

        <DefaultLayout title='React-Chartjs-2'>

            <div className="box">
                <h1 className="subtitle">{'Range Chart'}</h1>
                <FloatingChart></FloatingChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Doughnut Chart'}</h1>
                <DoughnutChart></DoughnutChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Bar Chart'}</h1>
                <BarChart></BarChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line Chart'}</h1>
                <LineChart></LineChart>
            </div>

        </DefaultLayout>
    )
}
