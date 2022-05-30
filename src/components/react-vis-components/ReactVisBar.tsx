import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries } from 'react-vis';

export default function ReactVisBar() {

    const colorRange = [
        '#19CDD7',
        '#DDB27C',
        '#88572C',
        '#FF991F',
        '#F15C17',
        '#223F9A',
        '#DA70BF',
        '#125C77',
        '#4DC19C',
        '#776E57',
        '#12939A',
        '#17B8BE',
        '#F6D18A',
        '#B7885E',
        '#FFCB99',
        '#F89570',
        '#829AE3',
        '#E79FD5',
        '#1E96BE',
        '#89DAC1',
        '#B3AD9E'
    ];

    const data: any =
        [
            {
                x: 310,
                x0: 400,
                y: 1,
                color: 1
            },
            {
                x: 210,
                x0: 310,
                y: 2,
                color: 2
            },
            {
                x: 180,
                x0: 210,
                y: 3,
                color: 'red'
            },
            {
                x: 100,
                x0: 180,
                y: 4
            },
            {
                x: 1,
                x0: 100,
                y: 5
            },
        ]

    // const data = [
    //     { x: 1, y: 310, y0: 400, color: 1 },
    //     { x: 2, y: 210, y0: 310, color: 2 },
    //     // { x: 3, y: 180, y0: 210, color: "#1cce67" },
    //     // { x: 4, y: 100, y0: 180, color: "#0a70fd" },
    //     // { x: 5, y: 1, y0: 100, color: "#7b61ff" }
    // ];

    return (

        <XYPlot
            // xType="ordinal"
            width={500}
            height={300}
            colorRange={colorRange}
            xDomain={[
                0,
                450
            ]}
            yDomain={[
                1,
                5
            ]}
        >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <HorizontalBarSeries data={data} barWidth={0.5} />
            {/* <VerticalBarSeriesCanvas data={blueData} barWidth={10} /> */}
            {/* <LabelSeries data={labelData} /> */}
            {/* getLabel={(d: any) => d.x}  */}
        </XYPlot>
        // <p>qwd</p>
    )
}
