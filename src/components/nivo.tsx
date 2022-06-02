import React from 'react'
import DefaultLayout from '../layouts/Default';
import DivergingChart from '../components/nivo-components/DivergingChart';

export default function Nivo() {

    return (

        <DefaultLayout title='Nivo'>

            <DivergingChart></DivergingChart>

        </DefaultLayout>
    )
}
