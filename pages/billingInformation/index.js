import {useEffect,useState} from 'react';
import Head from 'next/head';
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getBlillingData} from "../../redux/billingInformation/billingInformationSlice";
import {useSelector,useDispatch} from 'react-redux';

export default function index() {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.billing)
    let filtersData = useSelector((state) => state.auth)

    let apiObject = {page:0,startDate:'',endDate:'',consumerNo:'',circle_name:'',division_name:'',region:'',divisionId:''}

    useEffect(() => {
        dispatch(getBlillingData(apiObject))
    },[])

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
                paginateApi={getBlillingData}
                staticData={true}
                data={[
                  {label:"Division",type:"select",value:"division_name",filterList:filtersData.bill_division},
                  {label:"Zone",type:"select",value:"circle_name",filterList:filtersData.zone},
                  {label:"Consumer No",type:"text",value:"consumerNo"},
                  {label:"Start Date",type:"date",value:"startDate"},
                  {label:"End Date",type:"date",value:"endDate"},
                ]} 
                title="Billing Information"
              />
              <TableData 
                data={data} 
                paginateApi={getBlillingData}
                filters={{}}
                paginate={true}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
