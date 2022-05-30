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

export default function VDonutChart() {

    const data = [
        { x: "Resolved", y: 70 },
        { x: "Unresolved", y: 40 },
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
        <div style={{ height: '250px', width: '500px' }}>
            <VictoryChart
                width={400}
                height={400}
            >

                <VictoryAxis
                    tickValues={['']}
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fontSize: "10px" },
                    }}
                />

                <VictoryLegend
                    x={-130}
                    y={150}
                    // title="Legend"
                    // centerTitle={false}
                    orientation="vertical"
                    // gutter={20}
                    style={
                        {
                            // border: { stroke: "black" },
                            // title: { fontSize: 20 },
                            labels: { fontSize: 22 }
                        }
                    }
                    data={[
                        { name: "Resolved", symbol: { fill: "#0a70fd", type: "square" } },
                        { name: "Unresolved", symbol: { fill: "#f4f4f4", type: "square" } },
                    ]}
                />

                <text
                    fill="#000000"
                    x="185"
                    y="200"
                    fontSize={24}
                    fontWeight="bold"
                >
                    234
                </text>
                <text
                    fill="#000000"
                    x="145"
                    y="218"
                    fontSize={16}
                >
                    Total Comments
                </text>

                <VictoryPie
                    colorScale={["#0a70fd", "#f4f4f4"]}
                    cornerRadius={7}
                    innerRadius={100}
                    data={data}
                    labels={(label: any) => " "}
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
