import {useEffect} from 'react';
import Head from 'next/head';
import CountCard from '../../components/CountCard';
import FilterCard from '../../components/FilterCard';
import TableData from "../../components/TableData";
import {getPaymentsData} from "../../redux/payments/paymentsSlice";
import {useSelector,useDispatch} from 'react-redux';


export default function index() {

  let dispatch = useDispatch()
  let data = useSelector((state) => state.payments)

  let apiObject = {page:0,startDate:'',endDate:'',consumerNo:''}

  useEffect(() => {
      dispatch(getPaymentsData(apiObject))
  },[])


  return (
    <div>
      <Head>
        <title>Payments</title>
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
                paginateApi={getPaymentsData}
                flag={"Category"}
                data={[
                  {label:"Start Date",type:"date",value:"startDate"},
                  {label:"End Date",type:"date",value:"endDate"},
                  {label:"Consumer Number",type:"text",value:"consumerNo"},
                ]} 
                title="Payments Data"
              />
              <TableData 
                data={data} 
                paginateApi={getPaymentsData}
                filters={{}}
                paginate={true}
                />
          </div>
        </div>
      </div>
    </div>
  )
}
