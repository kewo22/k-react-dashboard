import React from 'react'
import ReBarChart from '../components/recharts-components/ReBarChart';
import ReDonutChart from '../components/recharts-components/ReDonutChart';
import ReSimpleBarChart from '../components/recharts-components/ReSimpleBarChart';
import ReSplineChart from '../components/recharts-components/ReSplineChart';
import DefaultLayout from '../layouts/Default';


export default function Recharts() {

    return (
        <DefaultLayout title='Recharts'>

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
                <ReSimpleBarChart />
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line Chart'}</h1>
                <ReSplineChart />
            </div>

        </DefaultLayout>
    )
}
