import React from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Recharts() {

    // const data = [
    //     { x: 'a', y: 2 },
    //     { x: 'b', y: 4 },
    //     { x: 'c', y: 15 }
    // ]

    const data = [
        {
            name: 'Page A',
            pv: [0, 10],
        },
        {
            name: 'Page B',
            pv: [12, 20],
        },
        {
            name: 'Page c',
            pv: [20, 26],
        },

    ];

    return (
        // <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
        // </ResponsiveContainer>
    )
}
