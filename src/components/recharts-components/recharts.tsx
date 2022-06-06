import React from 'react'
import ReBarChart from './ReBarChart';
import ReDonutChart from './ReDonutChart';
import ReSimpleBarChart from './ReSimpleBarChart';
import ReSplineChart from './ReSplineChart';
import DefaultLayout from '../../layouts/Default';
import { ReChartsBarChartData } from '../../data/rechars-bar-chart-data';


export default function Recharts() {

    return (
        <DefaultLayout title='Recharts' to='recharts'>

            <div className="box">
                <h1 className="subtitle">{'Range Chart'}</h1>
                <ReBarChart />
            </div>

            <div className="box">
                <h1 className="subtitle">{'Doughnut Chart'}</h1>
                <ReDonutChart />
            </div>

            <div className="box">
                <h1 className="subtitle">{'Bar Chart'}</h1>
                <ReSimpleBarChart
                    data={ReChartsBarChartData}
                    width={500}
                    height={300}
                    yAxisLabelText={'No Of Assignments'}
                    yAxisDataKey='value'
                    xAxisDataKey='name'
                />
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line Chart'}</h1>
                <ReSplineChart />
            </div>

        </DefaultLayout>
    )
}
