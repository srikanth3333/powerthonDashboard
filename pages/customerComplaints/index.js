import {useEffect,useState} from 'react';
import Head from 'next/head'
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getComplaints} from "../../redux/cutomerComplaints/customerComplaintsSlice";
import {useSelector,useDispatch} from 'react-redux';


export default function index() {


  let dispatch = useDispatch()
  let data = useSelector((state) => state.billComplaints)
  let filtersData = useSelector((state) => state.auth)


  let apiObject = {page:0,startDate:'',endDate:'',category:'',circle_name:'',division_name:'',subdivision_name:'',minutes:''}

  useEffect(() => {
      dispatch(getComplaints(apiObject))
  },[])

  return (
    <div>
      <Head>
        <title>Billing  Complaints</title>
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
              paginateApi={getComplaints}
              flag={"Circle"}
              data={[
                {label:"Circle",type:"select",value:"circle_name",filterList:filtersData.circleData,selected:filtersData.selectedCategory},
                {label:"Division",type:"select",value:"division_name",filterList:filtersData.divisionData,selected:filtersData.selectedCircle},
                {label:"Sub Division",type:"select",value:"subdivision_name",filterList:filtersData.subdivisionData,selected:filtersData.selectedDivision},
                {label:"Start Date",type:"date",value:"startDate"},
                {label:"End Date",type:"date",value:"endDate"},
                {label:"Resolution Time",type:"text",value:"minutes"},
              ]} 
              title="Billing Complaints"
              />
              <TableData 
                data={data} 
                paginateApi={getComplaints}
                filters={{}}
                paginate={true}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
