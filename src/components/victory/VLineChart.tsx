import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLegend, VictoryLine, VictoryPie, VictoryTooltip } from 'victory';
// import * as V from 'victory';
import styles from '../../../styles/Home.module.css'

interface IProps {
    datum?: any;
    x?: number;
    y?: number;
    center?: any;
}

export default function VLineChart() {

    const data = [
        { x: 1, y: 1 },
        { x: 2, y: 6 },
        { x: 3, y: 5 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 10 },
        { x: 10, y: 13 },
        { x: 11, y: 11 },
        { x: 12, y: 10 },
    ]

    const VictoryCustomTooltip = (props: IProps) => {
        const { datum, x, y } = props;
        // console.log(props);
        return (
            <g style={{ pointerEvents: "none" }}>
                <foreignObject
                    x={x}
                    y={y}
                    width="100"
                    height="100"
                    style={{ overflow: "visible" }}
                >
                    <div className={styles.victoryTooltip}>
                        <span className="">{datum.y} {datum.x}</span>
                    </div>
                </foreignObject>
            </g>
        );
    };

    return (
        <div style={{ height: '300px', width: '500px' }}>
            <VictoryChart
                width={900}
                height={500}
                domainPadding={{ x: 15 }}
            >

                <VictoryAxis
                    tickValues={[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sept",
                        "Oct",
                        "Nov",
                        "Dec",
                    ]}
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: {
                            fontSize: "10px", angle: -45, textAnchor: 'end'
                        },
                    }}
                />

                <VictoryAxis
                    dependentAxis
                    // tickFormat={(x) => (`$${x / 1000}k`)}
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fontSize: "10px" },
                        grid: { stroke: '#cccccc', opacity: '0.3' }
                    }}
                />



                <VictoryLine
                    interpolation="natural"
                    data={data}
                    x="x"
                    y="y"
                    style={{
                        data: {
                            stroke: "#8884d8"
                            // fill: "#8884d8"
                        }
                    }}
                    labelComponent={
                        <VictoryTooltip
                            flyoutComponent={<VictoryCustomTooltip />}
                        />
                        // <VictoryTooltip />
                    }
                />

            </VictoryChart>
        </div>
    )
}
