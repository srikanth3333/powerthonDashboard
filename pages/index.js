import Head from 'next/head'
import CountCard from '../components/CountCard';
import FilterCard from '../components/FilterCard';
import TableData from "../components/TableData";

export default function Home() {
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
