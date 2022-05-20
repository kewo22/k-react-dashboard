import React, { useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label, Pie, PieChart } from 'recharts';
import styles from '../../../styles/Home.module.css'

export default function ReDonutChart() {

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 150 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];


  const renderColorfulLegendText = (value: string, entry: any) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };

  const test = () => {
    return (
      // style={{ color: "#596579", fontWeight: 500, padding: "10px" }}
      <span >
        {'value'}
      </span>
    );
  };

  const COLORS = ['#0a70fd', '#f4f4f4'];
  return (

    <PieChart width={800} height={400} >
      {/* onMouseEnter={this.onPieEnter} */}
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        // paddingAngle={10}
        dataKey="value"
      >
        {/* 
        <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          // padding={5}
          formatter={renderColorfulLegendText}
        /> */}

        <Label
          value="Pages of my website"
          // children={test}
          offset={0}
          position="center"
        />

        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
    </PieChart>

  )
}
