import React, { ReactNode, useEffect, useState } from 'react'
import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Label, Pie, PieChart } from 'recharts';
import styles from '../../../styles/Home.module.css'
import { SimpleBarChart } from '../../types/rechart/SimpleBarChart.types';

export default function ReSimpleBarChart(props: SimpleBarChart) {

  const defaultData: any[] = [
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

  let [chartData, setChartData] = useState<any[]>([]);
  let [posData, setPosData] = useState<any>({});

  useEffect(() => {
    props.data ? setChartData([...props.data]) : setChartData([...defaultData])
    // return () => {
    //   second
    // }
  }, [props.data])

  // const CustomizedLabelB = ({ kapi, metric, viewBox }: any) => {
  //   return (
  //     <text
  //       x={0}
  //       y={0}
  //       dx={-210}
  //       dy={40}
  //       fill={'stroke'}
  //       fontSize={12}
  //       transform="rotate(-90)"
  //       textAnchor="start"
  //     // fontFamily="inherit" // HAVE TO CHECK 
  //     >
  //       {'Number of assignments'}
  //     </text>
  //   );
  // };

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


  const onclick = (e: any) => {
    if (props.onBarClick) props.onBarClick(e);
  }

  return (

    <ResponsiveContainer
      width={props.width}
      height={props.height}
    >

      <BarChart
        data={chartData}
        barGap={0}
        barCategoryGap={0}
      >

        <YAxis
          dataKey="value"
          type="number"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
          ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} // or tickCount={7} // but HOW TO CALC ????
        // tickCount={7}
        // label={<CustomizedLabelB />}
        >
          <Label
            angle={-90}
            value={props.yAxisLabelText}
            position='insideStart'
            style={
              { textAnchor: 'middle', fontSize: "12px" }
            }
          />
        </YAxis>

        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          tick={{ fontSize: 10 }}
          height={50}
          interval={0}
        />

        <Tooltip
          cursor={false}
          position={{ x: posData.x + posData.width + 5, y: posData.y }}
          content={<CustomTooltip />}
        />

        <Bar
          dataKey="value"
          barSize={12}
          radius={14}
          background={false}
          onMouseOver={(data) => {
            // console.log("data", data);
            setPosData(data);
          }}
          onClick={onclick}
        >
          {
            chartData.map((entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))
          }
        </Bar>

      </BarChart>

    </ResponsiveContainer >



  )
}
