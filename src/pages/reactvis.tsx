import React from 'react'
import ReactVisBar from '../components/react-vis-components/ReactVisBar';
import DefaultLayout from '../layouts/Default';

export default function ReactVis() {

    return (

        <DefaultLayout title='React-Vis'>

            <div className="box">
                <h1 className="subtitle">{'Range Chart'}</h1>
                <ReactVisBar></ReactVisBar>
            </div>


        </DefaultLayout>
    )
}
