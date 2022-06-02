import React from 'react'
import ReactVisBar from '../components/react-vis-components/ReactVisBar';
import ReactVisDonut from '../components/react-vis-components/ReactVisDonutChart';
import ReactVisLineChart from '../components/react-vis-components/ReactVisLineChart';
import ReactVisSimpleBar from '../components/react-vis-components/ReactVisSimpleBarChart';
import DefaultLayout from '../layouts/Default';

export default function ReactVis() {

    return (

        <DefaultLayout title='React-Vis'>

            <div className="box">
                <h1 className="subtitle">{'Range Chart'}</h1>
                <ReactVisBar></ReactVisBar>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Doughnut  Chart'}</h1>
                <ReactVisDonut></ReactVisDonut>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Bar  Chart'}</h1>
                <ReactVisSimpleBar></ReactVisSimpleBar>
            </div>

            <div className="box">
                <h1 className="subtitle">{'Line  Chart'}</h1>
                <ReactVisLineChart></ReactVisLineChart>
            </div>

        </DefaultLayout>
    )
}
