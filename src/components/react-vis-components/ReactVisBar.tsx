import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries, HorizontalBarSeries } from 'react-vis';

export default function ReactVisBar() {

    const greenData: any = [
        { x: 0, x0: 1, y: 12, y0: 2 },
        { x: 1, x0: 2, y: 5, y0: 3 },
        { x: 2, x0: 3, y: 15, y0: 4 }
    ];

    // const greenData: any = [
    //     { x: 12, x0: 2, y: 0, y0: 1 },
    //     { x: 5, x0: 3, y: 1, y0: 2 },
    //     { x: 15, x0: 4, y: 2, y0: 3 }
    // ];

    // const labelData: any = greenData.map((d: any, idx: any) => ({
    //     x: d.x,
    //     y: Math.max(greenData[idx].y, blueData[idx].y)
    // }));

    return (

        <XYPlot xType="ordinal" width={500} height={300} >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <HorizontalBarSeries data={greenData} barWidth={0.5} />
            {/* <VerticalBarSeriesCanvas data={blueData} barWidth={10} /> */}
            {/* <LabelSeries data={labelData} /> */}
            {/* getLabel={(d: any) => d.x}  */}
        </XYPlot>
        // <p>qwd</p>
    )
}
