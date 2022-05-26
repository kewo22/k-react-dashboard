import React, { useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label } from 'recharts';
import styles from '../../../styles/Home.module.css'

export default function ReBarChart() {

  let [posData, setPosData] = useState<any>({});

  const data = [
    {
      name: 'Ceramic Core Making',
      range: [0, 100],
      color: '#7b61ff',
      summary: '82s (31%)'
    },
    {
      name: 'Batch Operation',
      range: [100, 170],
      color: '#0a70fd',
      summary: '18s (15%)'
    },
    {
      name: 'Ceramic Core Flaring',
      range: [170, 200],
      color: '#1cce67',
      summary: '2s (3%)'
    },
    {
      name: 'Wax Pattern Moulding',
      range: [200, 300],
      color: '#ff8e50',
      summary: '78s (28%)'
    },
    {
      name: 'Primary Slurry Dripping',
      range: [300, 410],
      color: '#ff6263',
      summary: '92s (41%)'
    },
  ];

  const tickFormatter = (value: string, index: number) => {
    const limit = 20; // put your maximum character
    if (value.length < limit) return value;
    return `${value.substring(0, limit)}...`;
  };

  const CustomTooltip = (props: any) => {
    const { active } = props;
    const { name, summary } = posData;
    if (active) {
      return (
        <div className={styles.customTooltip}>
          <p>{name}</p>
          <p>{summary}</p>
        </div >
      );
    }
    return null;
  };

  return (

    <BarChart
      layout="vertical"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      {/* <CartesianGrid stroke="#f5f5f5" /> */}
      <YAxis
        dataKey="name"
        type="category"
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 10 }}
      // tick={<CustomYAxisTick />}
      />
      {/* tickFormatter={tickFormatter}  */}
      <XAxis
        type="number"
        tickLine={false}
        unit='s'
        tick={{ fontSize: 10 }}
        axisLine={false}
        label={{ value: "Time (s)", position: "insideBottom", dy: 15, fontSize: 10 }}
        // ticks={[0, 50, 100, 200, 300, 400, 500]}
        domain={[10, 450]}
      />

      <YAxis
        yAxisId="right"
        type="category"
        dataKey="summary"
        name="summary"
        orientation="right"
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 10 }}
        width={30}
      />

      <Tooltip
        cursor={false}
        position={{ x: posData.x + posData.width + 8, y: posData.y - 5 }}
        content={<CustomTooltip />}
      />

      <Bar
        dataKey="range"
        barSize={8}
        radius={14}
        background={false}
        onMouseOver={(data) => {
          // console.log("data", data);
          setPosData(data);
        }}
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))
        }
      </Bar>
      {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
    </BarChart>

  )
}
