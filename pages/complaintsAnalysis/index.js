import {useEffect,useState} from 'react';
import Head from 'next/head'
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getAnalysisComplaints} from "../../redux/cutomerComplaints/customerAnalysisReport";
import {useSelector,useDispatch} from 'react-redux';

export default function index() {


  let dispatch = useDispatch()
  let data = useSelector((state) => state.complaintsAnalysis)
  let filtersData = useSelector((state) => state.hierarchy)



  let apiObject = {startDate:'',endDate:'',category:'',circle_name:'',division_name:'',subdivision_name:'',minutes:''}

  useEffect(() => {
      dispatch(getAnalysisComplaints(apiObject))
  },[])


  return (
    <div>
      <Head>
        <title>Complaints Analysis</title>
        <meta name="description" content="Powerthon" />
      </Head>
      <div className="count-card">
          <CountCard 
            loading={data.loading}
            data={[
              {name:'Total Count',count:data.totalCount},
            ]} />
        <div className="card mt-3">
          <div className="card-body">
          <FilterCard 
                finalCount={data.totalCount}
                objectData={apiObject}
                paginateApi={getAnalysisComplaints}
                flag={"Circle"}
                download={false}
                db="bill_complaint_ivrs_mobileno"
                selectLoading={filtersData.loading}
                data={[
                  {label:"Circle",type:"select",value:"circle_name",filterList:filtersData.data[0]?.circle_name},
                  {label:"Division",type:"select",value:"division_name",filterList:filtersData.data[0]?.division},
                  {label:"Sub Division",type:"select",value:"subdivision_name",filterList:filtersData.data[0]?.subdivision},
                  {label:"Start Date",type:"date",value:"startDate"},
                  {label:"End Date",type:"date",value:"endDate"},
                  {label:"Resolution Time",type:"text",value:"minutes"},
                ]} 
                title="Analysis Complaints"
              />
              <TableData 
                  data={data} 
                  paginateApi={getAnalysisComplaints}
                  filters={{}}
                  paginate={false}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
