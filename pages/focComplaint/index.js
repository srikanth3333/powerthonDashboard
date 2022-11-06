import {useEffect,useState} from 'react';
import Head from 'next/head';
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getFocData,getFocGraphData} from "../../redux/focComplaint/focComplaintSlice";
import {useSelector,useDispatch} from 'react-redux';


export default function index() {

  let dispatch = useDispatch()
  let data = useSelector((state) => state.focData)
  let filtersData = useSelector((state) => state.auth)

  let apiObject = {page:0,startDate:'',endDate:'',category:'',circle_name:'',division_name:'',subdivision_name:'',minutes:''}

  useEffect(() => {
      dispatch(getFocData(apiObject))
  },[])


  return (
    <div>
      <Head>
        <title>FOC Complaints</title>
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
                paginateApi={getFocData}
                flag={"Category"}
                data={[
                  {label:"Category",type:"select",value:"category",filterList:filtersData.category,selected:filtersData.selectedCategory},
                  {label:"Circle",type:"select",value:"circle_name",filterList:filtersData.circleData,selected:filtersData.selectedCategory},
                  {label:"Division",type:"select",value:"division_name",filterList:filtersData.divisionData,selected:filtersData.selectedCircle},
                  {label:"Sub Division",type:"select",value:"subdivision_name",filterList:filtersData.subdivisionData,selected:filtersData.selectedDivision},
                  {label:"Start Date",type:"date",value:"startDate"},
                  {label:"End Date",type:"date",value:"endDate"},
                  {label:"Resolution Time",type:"text",value:"minutes"},
                ]} 
                title="FOC Complaints"
              />
              <TableData 
                data={data} 
                paginateApi={getFocData}
                filters={{}}
                paginate={true}
                />
          </div>
        </div>
      </div>
    </div>
  )
}
