import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import ReSimpleBarChart from '../components/recharts-components/ReSimpleBarChart'
import { ReChartsBarChartDrillDownData } from '../data/rechars-bar-chart-drilldown-data'
import { List } from '../DataStruct/List'

interface chartObj {
    yAxisLabelText: string,
    data: any[]
}

const Recharts: NextPage = () => {

    const [data, setData] = useState<chartObj>();
    const [lists, setLists] = useState<chartObj[]>([]);
    const [chartTitle, setChartTitle] = useState<string[]>([]);

    useEffect(() => {
        // makeData();
        setLists([
            {
                yAxisLabelText: "Number of assignments",
                data: ReChartsBarChartDrillDownData
            }
        ])
        setData({
            data: ReChartsBarChartDrillDownData,
            yAxisLabelText: 'Number of assignments'
        })
        // setChartTitle([ReChartsBarChartDrillDownData[0].yAxisLabelText])
        // console.log(ReChartsBarChartDrillDownData);
    }, []);


    useEffect(() => {
        // console.log(lists)
    }, [lists]);


    // const makeData = () => {
    //     const list = new DoublyLinkedList<dataObj>();
    //     const colors = ['#ec84ee', '#0a70fd', '#1cce67', '#ff6263', '#01dcea', '#ffcc12', '#ff8e50', '#7b61ff', '#7b61ff', '#7b61ab'];
    //     colors.forEach((color, i) => {
    //         let dataObj: dataObj = {
    //             barTitle: 'Supplier Info',
    //             data: []
    //         };
    //         dataObj.data.push(
    //             {
    //                 id: i,
    //                 name: `Supplier ${i + 1}`,
    //                 value: Math.floor(Math.random() * 10) + 1,
    //                 color,
    //             }
    //         );
    //         list.addLast(dataObj)
    //     });
    //     // for (let index = 0; index < 10; index++) {
    //     //     let dataObj: dataObj = {
    //     //         barTitle: 'Supplier Info',
    //     //         data: []
    //     //     };
    //     //     const colors = ['#ec84ee', '#0a70fd', '#1cce67', '#ff6263', '#01dcea', '#ffcc12', '#ff8e50', '#7b61ff', '#7b61ff', '#7b61ab'];
    //     //     colors.forEach((color, i) => {
    //     //         dataObj.data.push(
    //     //             {
    //     //                 id: i,
    //     //                 name: `Supplier ${i + 1}`,
    //     //                 value: Math.floor(Math.random() * 10) + 1,
    //     //                 color,
    //     //             }
    //     //         );
    //     //     });
    //     //     list.addLast(dataObj)
    //     // }

    //     if (list.head?.data.data) setData(list.head?.data.data);
    //     console.log(data)
    //     console.log(list)
    //     debugger
    //     console.log(list.print())

    // }

    // const makeDrillDown1 = (color: string, i: number): any[] => {
    //     const data: any[] = [];
    //     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dev'];
    //     months.forEach(month => {
    //         data.push(
    //             {
    //                 name: month,
    //                 value: Math.floor(Math.random() * 10) + 1,
    //                 color,
    //             }
    //         )
    //     })
    //     return data
    // }

    const onBarClick = (e: any) => {
        // console.log(e)
        if (e.data) {
            const chartObj: chartObj = {
                data: e.data,
                yAxisLabelText: e.data[0].yAxisLabelText
            }
            const tempNames: string[] = chartTitle;
            setChartTitle([...tempNames, e.yAxisLabelText])
            setData(chartObj);
            const tempList: chartObj[] = [...lists];
            tempList.push(chartObj)
            setLists(tempList);
        }
    }

    const backClick = () => {
        chartTitle.pop()
        const tempList: chartObj[] = [...lists];
        tempList.pop();
        setLists(tempList);
        const chartObj: chartObj = {
            data: tempList[tempList.length - 1].data,
            yAxisLabelText: tempList[tempList.length - 1].yAxisLabelText
        }
        setData(chartObj)
    }

    return (
        <div className={styles.appWrapper}>
            <Head>
                <title>Recharts | Examples</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head
            >

            <div className="box m-3">
                <h1 className="subtitle">{'Drill Down Example'}</h1>

                {
                    (lists && lists.length > 1) &&
                    <button onClick={backClick} disabled={lists.length === 1} >back {` to ${chartTitle[chartTitle.length - 1]}`}</button>
                }


                {/* <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                    <ul>
                        {
                            bc.map(bc => {
                                {
                                    return (
                                        <li><a href="#" className="is-active">{bc}</a></li>
                                        //  <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li> 
                                    )
                                }
                            })
                        }
                    </ul>
                </nav> */}

                {
                    data &&
                    <ReSimpleBarChart
                        data={data.data}
                        width={500}
                        height={300}
                        yAxisLabelText={data.yAxisLabelText}
                        onBarClick={onBarClick}
                        yAxisDataKey='value'
                        xAxisDataKey='name'
                    />
                }
            </div>


        </div>
    )
}

export default Recharts
