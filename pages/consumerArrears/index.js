import {useEffect,useState} from 'react';
import Head from 'next/head';
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getConsumerArrears} from "../../redux/consumerArrears/consumerArrearsSlice";
import {useSelector,useDispatch} from 'react-redux';

export default function index() {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.consumerArrears)
    let filtersData = useSelector((state) => state.auth)

    let apiObject = {page:0,startDate:'',endDate:'',consumerNo:'',
                     circle_name:'',division_name:'',region:'',divisionId:'',
                     sortId:'',location_code:''}

    useEffect(() => {
        dispatch(getConsumerArrears(apiObject))
    },[])

  let filteredZoneData = filtersData.zone.filter((item) => item.division == filtersData.filterObject?.division_name)?.map((text) => text.zone)

  return (
    <div>
      <Head>
        <title>Billing Information</title>
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
                paginateApi={getConsumerArrears}
                staticData={true}
                loadingState={data.loading}
                data={[
                  {label:"Division",type:"select",value:"division_name",filterList:filtersData.bill_division},
                  {label:"Zone",type:"select",value:"circle_name",filterList:filteredZoneData},
                  {label:"Start Date",type:"date",value:"startDate"},
                  {label:"End Date",type:"date",value:"endDate"},
                  {label:"Consumer No",type:"text",value:"consumerNo"},
                  {label:"Location Code",type:"text",value:"location_code"},
                ]} 
                title="Consumer Arrears"
              />
              <TableData 
                data={data} 
                paginateApi={getConsumerArrears}
                filters={{}}
                paginate={true}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
