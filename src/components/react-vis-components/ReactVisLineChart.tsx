import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries, RadialChart, Borders, Hint } from 'react-vis';
import styles from '../../../styles/Home.module.css'
import { curveCatmullRom } from 'd3-shape';

export default function ReactVisLine() {

    const data = [
        { x: 1, y: 3 }, 
        { x: 2, y: 5 }, 
        { x: 3, y: 15 }, 
        { x: 4, y: 12 }
    ]

    return (

        <XYPlot width={300} height={300}>

            <LineSeries
                data={data}
                curve={curveCatmullRom.alpha(0.5)}
                style={{ fill: 'none', strokeLinejoin: "round" }}
            />

            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />

        </XYPlot>

    )
}
