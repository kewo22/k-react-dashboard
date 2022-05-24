import React from 'react';
import { Layout, Marimekko, ResponsiveMarimekko } from '@nivo/marimekko'

export default function DivergingChart() {

    const data = [
        {
            "statement": "it's good",
            "participation": 29,
            "stronglyAgree": 9,
            "agree": 12,
            "disagree": 30,
            "stronglyDisagree": 10
        },
        {
            "statement": "it's sweet",
            "participation": 15,
            "stronglyAgree": 29,
            "agree": 10,
            "disagree": 8,
            "stronglyDisagree": 14
        },
        {
            "statement": "it's spicy",
            "participation": 1,
            "stronglyAgree": 0,
            "agree": 5,
            "disagree": 31,
            "stronglyDisagree": 30
        },
        // {
        //     "statement": "worth eating",
        //     "participation": 0,
        //     "stronglyAgree": 22,
        //     "agree": 24,
        //     "disagree": 27,
        //     "stronglyDisagree": 8
        // },
        // {
        //     "statement": "worth buying",
        //     "participation": 28,
        //     "stronglyAgree": 22,
        //     "agree": 29,
        //     "disagree": 22,
        //     "stronglyDisagree": 4
        // }
    ]


    const commonProps = {
        width: 900,
        height: 500,
        margin: {
            top: 40,
            right: 80,
            bottom: 40,
            left: 80,
        },
        id: 'statement',
        value: 'participation',
        layout: 'vertical' as Layout,
        axisLeft: {},
        axisBottom: {},
        dimensions: [
            {
                id: 'disagree strongly',
                value: 'stronglyDisagree',
            },
            // {
            //     id: 'disagree',
            //     value: 'disagree',
            // },
            // {
            //     id: 'agree',
            //     value: 'agree',
            // },
            // {
            //     id: 'agree strongly',
            //     value: 'stronglyAgree',
            // },
        ],
    }

    const generateData = () =>
        [`it's good`, `it's sweet`, `it's spicy`, 'worth eating', 'worth buying'].map(statement => ({
            statement,
            participation: 10,
            stronglyAgree: 30,
            agree: 6,
            disagree: 26,
            stronglyDisagree: 15,
        }))

    const StatementsLayer = ({ data }: any) => (
        <>
            {data.map((datum: any) => {
                return (
                    <g key={datum.id} transform={`translate(370, ${datum.y - 9})`}>
                        <text textAnchor="middle" style={{ fontWeight: '600', fontSize: 14 }}>
                            {datum.id}
                        </text>
                    </g>
                )
            })}
        </>
    )

    const ShadowsLayer = ({ data }: any) => (
        <>
            {data.map((datum: any) => (
                <React.Fragment key={datum.id}>
                    <rect
                        x={datum.x - 6}
                        y={datum.y + 9}
                        width={datum.width}
                        height={datum.height}
                        opacity={0.15}
                    />
                    <rect
                        x={datum.x}
                        y={datum.y}
                        width={datum.width}
                        height={datum.height}
                        stroke="#ffffff"
                        strokeWidth={4}
                    />
                </React.Fragment>
            ))}
        </>
    )

    return (

        <div style={{ height: '300px', width: '500px' }} >

            <Marimekko
                {...commonProps}
                height={700}
                data={data}
                innerPadding={32}
                enableGridY={false}
                layout="horizontal"
                offset="silouhette"
                layers={['grid', 'axes', 'bars']}
                // layers={['grid', 'axes', ShadowsLayer, 'bars', StatementsLayer]}
                axisLeft={undefined}
                axisBottom={undefined}
            />

            {/* <ResponsiveMarimekko
                data={data}
                id="statement"
                value="participation"
                dimensions={[
                    {
                        id: 'disagree strongly',
                        value: 'stronglyDisagree'
                    },
                    {
                        id: 'disagree',
                        value: 'disagree'
                    },
                    {
                        id: 'agree',
                        value: 'agree'
                    },
                    {
                        id: 'agree strongly',
                        value: 'stronglyAgree'
                    }
                ]}
                innerPadding={9}
                axisTop={null}
                axisRight={{
                    // orient: 'right',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 0
                }}
                axisBottom={{
                    // orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'participation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    // orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'opinions',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
                colors={{ scheme: 'spectral' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'rgba(0, 0, 0, 0)',
                        color: 'inherit',
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 8
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'agree strongly'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'disagree strongly'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 80,
                        itemsSpacing: 0,
                        itemWidth: 140,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'right-to-left',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'square',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            /> */}

        </div>



    )
}
