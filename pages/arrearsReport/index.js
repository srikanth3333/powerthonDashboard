import {useEffect,useState} from 'react';
import Head from 'next/head';
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getArrearsReport} from "../../redux/arrearsReport/arrearsReportSlice";
import {useSelector,useDispatch} from 'react-redux';

export default function index() {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.arrears)
    let apiObject = {division:'',month:'',startDate:'',endDate:''}

    useEffect(() => {
        dispatch(getArrearsReport(apiObject))
    },[])


    let totalCounts = data.data && data.data.reduce((previousValue,currentValue) => {

        return {
            "count": previousValue.count + currentValue.count,
            "totalArrearsCount": previousValue.totalArrearsCount +
             currentValue.totalArrearsCount
        }
    },{count:0,totalArrearsCount:0})

    let monthList = [
         "December",
         "November",
         "April",
         "March",
         "July",
         "September",
         "October",
         "May",
         "June",
         "August",
         "January"
    ]
    
    let divisionList = [
       "Bhopal City East",
       "Bhopal City North",
       "Bhopal City West",
       "Bhopal City South",
       "O&M KOLAR"
    ]

  return (
    <div>
      <Head>
        <title>Arrears Report</title>
        <meta name="description" content="Powerthon" />
      </Head>
      <div className="count-card">
        <CountCard 
          loading={data.loading}
          data={[
            {name:'Consumer Count',count:totalCounts.count},
            // {name:'Arrears Amount',count:totalCounts.totalArrearsCount},
          ]} />
        <div className="card mt-3">
          <div className="card-body">
            <FilterCard 
                    objectData={apiObject}
                    paginateApi={getArrearsReport}
                    download={false}
                    dataDownload={data} 
                    data={[
                        {label:"Divison",type:"select",value:"division",filterList:divisionList},
                        {label:"Month",type:"select",value:"month",filterList:monthList},
                        {label:"Start Date",type:"date",value:"startDate"},
                        {label:"End Date",type:"date",value:"endDate"},
                    ]} 
                    title="Arrears Report"
                />
              <TableData 
                data={data} 
                year={true}
                filters={{}}
                paginate={false}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
