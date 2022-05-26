import React, { ReactNode, useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label, Pie, PieChart } from 'recharts';
import styles from '../../../styles/Home.module.css'

export default function ReDonutChart() {

  let [posData, setPosData] = useState<any>({});


  const data = [
    { name: 'Resolved', value: 400, color: '#0a70fd' },
    { name: 'Unresolved', value: 150, color: '#f4f4f4' },
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

  const CustomTooltip = (props: any) => {
    const { active } = props;
    const { name, value } = posData;
    if (active) {
      return (
        <div className={styles.customTooltip}>
          <p>{value} {name}</p>
        </div >
      );
    }
    return null;
  };

  const CustomLegend = (props: any) => {
    const { active } = props;
    // console.log('props', props)
    return (
      <>
        {
          props.payload.map((entry: any, index: any) => (
            <div key={`legend-${index}`} className={`${styles.customPieLegendWrapper} mb-2`}>
              <div className={`${styles.customPieLegendBox} mr-2`} style={{ backgroundColor: entry.color }}></div>
              <div>{entry.value}</div>
            </div>
          ))
        }
      </>
    );
  };

  function CustomLabel(props: any) {
    const { cx, cy } = props.viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy - 5}
          fill="rgba(0, 0, 0, 0.87)"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="14px" fontWeight="bold">
            {props.value2}
          </tspan>
        </text>
        <text
          x={cx}
          y={cy + 5}
          fill="rgba(0, 0, 0, 0.54)"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="10px">
            {props.value1}
          </tspan>
        </text>
      </>
    );
  }

  return (

    <PieChart width={500} height={250} >
      <Pie
        data={data}
        cx="30%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        dataKey="value"
        cornerRadius={5}
        onMouseOver={(data) => {
          // console.log("data", data);
          setPosData(data);
        }}
      >

        <Label
          content={<CustomLabel value1={'Total Comments'} value2={'234'} />}
          offset={0}
          position="center"
        />


        {/* </Label> */}

        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))
        }


      </Pie>

      <Legend
        layout="vertical"
        verticalAlign="middle"
        align="left"
        content={<CustomLegend />}
      />

      <Tooltip
        cursor={true}
        content={<CustomTooltip />}
      />




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
