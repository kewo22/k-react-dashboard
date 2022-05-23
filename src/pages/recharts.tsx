import React from 'react'
import ReBarChart from '../components/recharts-components/ReBarChart';
import DefaultLayout from '../layouts/Default';


export default function Recharts() {

    return (
        <DefaultLayout title='Recharts'>
            <ReBarChart />
            {/* // <ReDonutChart /> */}
        </DefaultLayout>
    )
}
