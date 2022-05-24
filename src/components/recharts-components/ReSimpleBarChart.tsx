import React, { ReactNode, useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label, Pie, PieChart } from 'recharts';
import styles from '../../../styles/Home.module.css'

export default function ReSimpleBarChart() {

  const data = [
    {
      name: 'Supplier 1',
      value: 10,
      color: '#ec84ee'
    },
    {
      name: 'Supplier 2',
      value: 9,
      color: '#0a70fd'
    },
    {
      name: 'Supplier 3',
      value: 8,
      color: '#1cce67'
    },
    {
      name: 'Supplier 4',
      value: 7,
      color: '#ff6263'
    },
    {
      name: 'Supplier 5',
      value: 6,
      color: '#01dcea'
    },
    {
      name: 'Supplier 6',
      value: 5,
      color: '#ffcc12'
    },
    {
      name: 'Supplier 7',
      value: 4,
      color: '#ff8e50'
    },
    {
      name: 'Supplier 8',
      value: 3,
      color: '#7b61ff'
    },
    {
      name: 'Supplier 9',
      value: 2,
      color: '#7b61ff'
    },
    {
      name: 'Supplier 10',
      value: 1,
      color: '#7b61ab'
    },
  ];

  const CustomizedLabelB = ({ kapi, metric, viewBox }: any) => {
    return (
      <text
        x={0}
        y={0}
        dx={-210}
        dy={40}
        fill={'stroke'}
        fontSize={12}
        transform="rotate(-90)"
        textAnchor="start"
      // fontFamily="inherit" // HAVE TO CHECK 
      >
        {'Number of assignments'}
      </text>
    );
  };

  const CustomizedAxisTick = ({ props }: any) => {
    // const { x, y, stroke, payload } = this.props;
    console.log(props)

    return (
      // <g transform={`translate(${1},${1})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        dwa
      </text>
      // </g>
    );
  }

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
    >

      <YAxis
        dataKey="value"
        type="number"
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 10 }}
        ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} // or tickCount={7} // but HOW TO CALC ????
        label={<CustomizedLabelB />}
      />

      <XAxis
        dataKey="name"
        // type="number"
        tickLine={false}
        axisLine={false}
        // tick={{ fontSize: 10 }}
        tick={CustomizedAxisTick}
      />

      <Bar
        dataKey="value"
        barSize={12}
        radius={14}
        background={false}
      // onMouseOver={(data) => {
      //   // console.log("data", data);
      //   setPosData(data);
      // }}
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))
        }
      </Bar>

    </BarChart>
  )
}
