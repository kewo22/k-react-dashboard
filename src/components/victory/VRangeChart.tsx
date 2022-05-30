import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTooltip } from 'victory';
// import * as V from 'victory';
import styles from '../../../styles/Home.module.css'

interface IProps {
    datum?: any;
    x?: number;
    y?: number;
    center?: any;
}

export default function VRangeChart() {

    const data = [
        { x: 1, y: 310, y0: 400, barColor: "#ff6263" },
        { x: 2, y: 210, y0: 310, barColor: "#ff8e50" },
        { x: 3, y: 180, y0: 210, barColor: "#1cce67" },
        { x: 4, y: 100, y0: 180, barColor: "#0a70fd" },
        { x: 5, y: 1, y0: 100, barColor: "#7b61ff" }
    ];

    const VictoryCustomTooltip = (props: IProps) => {
        const { datum, x, y } = props;
        console.log(props);
        return (
            <g style={{ pointerEvents: "none" }}>
                <foreignObject
                    x={x}
                    y={y}
                    width="10"
                    height="10"
                    style={{ overflow: "visible" }}
                >
                    <div className={styles.victoryTooltip}>
                        <div>
                            <span className="yValue">{datum.y}</span>
                            <span className="yUnits">{datum.yUnits}</span>
                        </div>
                        {/* <div className="xValue">March 24, 1990</div> */}
                    </div>
                </foreignObject>
            </g>
        );
    };

    return (
        <div style={{ height: '300px', width: '500px' }} >
            <VictoryChart
                horizontal={true}
                // width={500}
                // height={350}
            >

                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={["Primary Slurry Dripping", "Wax Pattern Moulding", "Ceramic Core Flaring", "Batch Operation", "Ceramic Core Making"]}
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fontSize: "10px" },
                    }}
                />

                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    // tickFormat={(x) => (`$${x / 1000}k`)}
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        // tickLabels: { fill: "transparent" }
                    }}
                />

                <VictoryBar
                    data={data}
                    x="x"
                    y="y"
                    barWidth={8}
                    style={{
                        data: {
                            fill: (d: any) => {
                                return data[d.index].barColor;
                            }
                        }
                    }}
                    cornerRadius={{
                        bottomLeft: 5,
                        bottomRight: 5,
                        topLeft: 5,
                        topRight: 5
                    }}

                    // labels={[1,2]}
                    // labelComponent={
                    //     <VictoryTooltip
                    //         // center={{ x: 6, y: 1 }}
                    //         // pointerOrientation="bottom"
                    //         // flyoutWidth={150}
                    //         // flyoutHeight={50}
                    //         // pointerWidth={150}
                    //         // cornerRadius={0}
                    //         flyoutStyle={{
                    //             stroke: "blue", // border-color
                    //             fill: "yellow", // background-color
                    //         }}
                    //     />
                    // }

                    labelComponent={
                        <VictoryTooltip
                            flyoutComponent={<VictoryCustomTooltip />}
                        />
                    }

                />
            </VictoryChart>
        </div>
    )
}
