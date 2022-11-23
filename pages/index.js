import Head from 'next/head'
import React from 'react';
import HomeCard from "../components/HomeCard"
import FilterCard from "../components/FilterCard"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Powerthon Dashboard</title>
        <meta name="description" content="Powerthon" />
      </Head>
      <div className="count-card">
        <div className="row">
          <div className="col-lg-6">
            <HomeCard title="Billing Data" 
              countArray={[
                {name:"Total Consumer Billed",count:30332},
                {name:"Current Bill Amount",count:30332},
                {name:"Arrears",count:30332},
                {name:"Total Bill Amount",count:30332},
              ]}
            />
          </div>
          <div className="col-lg-6">
            <HomeCard title="Payments Data" 
              countArray={[
                {name:"Total Consumer Billed",count:30332},
                {name:"Current Bill Amount",count:30332},
                {name:"Arrears",count:30332},
                {name:"Total Bill Amount",count:30332},
              ]}
            />
          </div>
          <div className="col-lg-6">
            <HomeCard title="Billing Complaints Data" 
              countArray={[
                {name:"Received Count",count:30332},
                {name:"Closed Count",count:30332},
                {name:"Pending Count",count:30332},
              ]}
            />
          </div>
          <div className="col-lg-6">
            <HomeCard title="FOC Complaints Data" 
              countArray={[
                {name:"Received Count",count:30332},
                {name:"Closed Count",count:30332},
                {name:"Pending Count",count:30332},
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
