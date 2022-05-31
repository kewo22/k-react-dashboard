import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries, RadialChart, Borders, Hint } from 'react-vis';
import styles from '../../../styles/Home.module.css'

export default function ReactVisSimpleBar() {

    const greenData = [
        {
            x: 'Supplier 1',
            y: 10
        },
        {
            x: 'Supplier 2',
            y: 9
        },
        {
            x: 'Supplier 3',
            y: 8
        },
        {
            x: 'Supplier 4',
            y: 7
        },
        {
            x: 'Supplier 5',
            y: 6
        },
        {
            x: 'Supplier 6',
            y: 5
        },
        {
            x: 'Supplier 7',
            y: 4
        },
        {
            x: 'Supplier 8',
            y: 3
        },
        {
            x: 'Supplier 9',
            y: 2
        },
        {
            x: 'Supplier 10',
            y: 1
        },
    ];

    const labelData = greenData.map((d, idx) => ({
        x: d.x,
        y: Math.max(greenData[idx].y, greenData[idx].y)
    }));

    return (

        <XYPlot xType="ordinal" width={500} height={300} className={styles.ReVisSimpleBarXYPlot}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis
                tickLabelAngle={-45}
                tickSize={0}
                style={
                    {
                        fontSize: '10px'
                    }
                }
            />
            <YAxis
                style={
                    {
                        fontSize: '10px',
                    }
                }
            />
            <VerticalBarSeries barWidth={0.1} data={greenData} />
        </XYPlot>
    )
}
