import React, { ReactNode, useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label, Pie, PieChart, LineChart, Line } from 'recharts';
import styles from '../../../styles/Home.module.css'

export default function ReSplineChart() {

  let [posData, setPosData] = useState<any>({});

  const data = [
    {
      name: 'Jan',
      value: 1,
    },
    {
      name: 'Feb',
      value: 6,
    },
    {
      name: 'Mar',
      value: 5,
    },
    {
      name: 'Apr',
      value: 10,
    },
    {
      name: 'May',
      value: 8,
    },
    {
      name: 'Jun',
      value: 7,
    },
    {
      name: 'Jul',
      value: 6,
    },
    {
      name: 'Aug',
      value: 7,
    },
    {
      name: 'Sept',
      value: 9,
    },
    {
      name: 'Oct',
      value: 12,
    },
    {
      name: 'Nov',
      value: 11,
    },
    {
      name: 'Dec',
      value: 11,
    },
  ];

  const CustomizedLabelB = ({ kapi, metric, viewBox }: any) => {
    return (
      <text
        x={0}
        y={0}
        dx={-150}
        dy={50}
        // fill={'stroke'}
        fontSize={12}
        transform="rotate(-90)"
      // textAnchor="start"
      // fontFamily="inherit" // HAVE TO CHECK 
      >
        {'Hours'}
      </text>
    );
  };

  const CustomTooltip = (props: any) => {
    // console.log('props', props)
    // console.log('posData', posData)
    const { active } = props;
    const { name, summary } = posData;
    if (active) {
      return (
        <div className={styles.customTooltip}>
          <p>{'name'}</p>
          <p>{'summary'}</p>
        </div >
      );
    }
    return null;
  };

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >

      <CartesianGrid
        vertical={false}
        strokeOpacity={0.3}
      />

      <XAxis
        dataKey="name"
        tickLine={false}
        axisLine={false}
        angle={-45}
        textAnchor="end"
        tick={{ fontSize: 10 }}
      />

      <YAxis
        dataKey="value"
        type="number"
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 10 }}
        // tickCount={7}
        label={<CustomizedLabelB />}
      />

      <Tooltip
        cursor={false}
        // position={{ x: 80 + 5, y: 243 }}
        // position={{ x: posData.x, y: posData.y }}
        content={<CustomTooltip />}
        allowEscapeViewBox={{ x: true, y: true }}
      />

      <Line
        type="natural"
        dataKey="value"
        stroke="#8884d8"
        dot={false}
        activeDot={{ r: 8 }}
        onMouseEnter={(data) => {
          // console.log("data", data);
          // setPosData(data);
        }}
      />

    </LineChart>
  )
}
