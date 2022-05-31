import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries, RadialChart, Borders, Hint } from 'react-vis';
import { Line } from 'victory';
import styles from '../../../styles/Home.module.css'

export default function ReactVisLine() {

    const data = [{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }]

    return (

        <XYPlot width={300} height={300}>

            <Line
                data={[{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }]}
            />
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />

        </XYPlot>

    )
}
