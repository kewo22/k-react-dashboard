import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ReBarChart from '../components/recharts-components/ReBarChart'
import DefaultLayout from '../layouts/Default'
import styles from '../../styles/Home.module.css'
import ReChartJs2 from './chartjs2'
import Recharts from './recharts'
// import "bulma/css/bulma.min.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <DefaultLayout title=''> */}

      <div className="columns">
        <div className="column">
          <Recharts />
        </div>
        <div className="column">
          <ReChartJs2 />
        </div>
      </div>


      {/* </DefaultLayout> */}

    </div>
  )
}

export default Home
