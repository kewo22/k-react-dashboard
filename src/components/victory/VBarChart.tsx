import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLegend, VictoryPie, VictoryTooltip } from 'victory';
// import * as V from 'victory';
import styles from '../../../styles/Home.module.css'

interface IProps {
    datum?: any;
    x?: number;
    y?: number;
    center?: any;
}

export default function VBarChart() {

    const data = [
        { x: 1, y: 10, barColor: "#ff6263" },
        { x: 2, y: 9, barColor: "#ff8e50" },
        { x: 3, y: 8, barColor: "#1cce67" },
        { x: 4, y: 7, barColor: "#0a70fd" },
        { x: 5, y: 6, barColor: "#0a70fd" },
        { x: 6, y: 5, barColor: "#0a70fd" },
        { x: 7, y: 4, barColor: "#0a70fd" },
        { x: 8, y: 3, barColor: "#0a70fd" },
        { x: 9, y: 2, barColor: "#0a70fd" },
        { x: 10, y: 1, barColor: "#0a70fd" }
    ];

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
                width={600}
                // height={400}
                domainPadding={{ x: 15 }}
            >

                <VictoryAxis
                    tickValues={[
                        "Supplier 1",
                        "Supplier 2",
                        "Supplier 3",
                        "Supplier 4",
                        "Supplier 5",
                        "Supplier 6",
                        "Supplier 7",
                        "Supplier 8",
                        "Supplier 9",
                        "Supplier 10",
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
                    }}
                />

                <VictoryBar
                    data={data}
                    x="x"
                    y="y"
                    barWidth={12}
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
                    labelComponent={
                        // <VictoryTooltip
                        //     flyoutComponent={<VictoryCustomTooltip />}
                        // />
                        <VictoryTooltip />
                    }
                />

            </VictoryChart>
        </div>
    )
}
