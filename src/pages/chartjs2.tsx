import React from 'react'
import DefaultLayout from '../layouts/Default';
import FloatingChart from '../components/react-chartjs-2-components/FloatingChart';

export default function ReChartJs2() {

    return (

        <DefaultLayout title='React-Chartjs-2'>

            {/* <div className="box"> */}
                <FloatingChart></FloatingChart>
            {/* </div> */}


        </DefaultLayout>
    )
}
