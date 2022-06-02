import React from 'react' 
import DefaultLayout from '../layouts/Default'; 
import VRangeChart from '../components/victory/VRangeChart';
import VDonutChart from '../components/victory/VDonutChart';
import VBarChart from '../components/victory/VBarChart';
import VLineChart from '../components/victory/VLineChart';

export default function Victory() {

    return (

        <DefaultLayout title='Victory'>

            <div className="box">
                <h1 className="subtitle">{'Range Chart'}</h1>
                <VRangeChart></VRangeChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Doughnut Chart'}</h1>
                <VDonutChart></VDonutChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Bar Chart'}</h1>
                <VBarChart></VBarChart>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line Chart'}</h1>
                <VLineChart></VLineChart>
            </div>

        </DefaultLayout>
    )
}
