import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries, RadialChart, Borders, Hint } from 'react-vis';

export default function ReactVisDonut() {

    const myData = [
        {
            angle: 9,
            color: "#0a70fd"
        },
        {
            angle: 5,
            color: "#f4f4f4"
        }
    ]

    return (

        <RadialChart
            data={myData}
            width={300}
            height={250}
            colorType="literal"
            innerRadius={100}
            radius={70}
            color={(d: any) => d.color}
            animation={"gentle"}
        />

    )
}
