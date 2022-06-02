import React from 'react'
import ReBarChart from './ReBarChart';
import ReDonutChart from './ReDonutChart';
import ReSimpleBarChart from './ReSimpleBarChart';
import ReSplineChart from './ReSplineChart';
import DefaultLayout from '../../layouts/Default';


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
                    width={600}
                    height={300}
                />
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line Chart'}</h1>
                <ReSplineChart />
            </div>

        </DefaultLayout>
    )
}
