import Head from 'next/head'
import React from 'react';
import CountCard from '../components/CountCard';
import FilterCard from '../components/FilterCard';
import TableData from "../components/TableData";
import axios from 'axios';


export default function Home() {

  const downloadData = async () => {
    console.log('triggerd')
    await axios.post(`http://localhost:3000/api/billingInformation/dataDownload?page=0`)
    .then(res => {
        console.log('res')
        console.log(res)
        // setDownloadDataArray(oldArray => [...oldArray, res.data.data]);
    })
    .catch(err => {
        console.log(JSON.stringify(err))
    })   
  }

  React.useEffect(() => {
    downloadData()
  },[])
  
  return (
    <div>
      <Head>
        <title>Powerthon Dashboard</title>
        <meta name="description" content="Powerthon" />
      </Head>
      <div className="count-card">
        <CountCard data={[
          {name:'Total Collection',count:"56,30332"},
          {name:'Today\'s Collection',count:"56,30332"},
          {name:'Previous Collection',count:"56,30332"},
        ]} />
        <div className="card mt-3">
          <div className="card-body">
              {/* <FilterCard data={[
                {label:"Division",type:"select"},
                {label:"Start Date",type:"date"},
                {label:"Division ID",type:"text"},
                {label:"Inote",type:"text"},
              ]} 
              title="Top 10 non paying customers"
              /> */}
              <TableData />
          </div>
        </div>
      </div>
    </div>
  )
}
