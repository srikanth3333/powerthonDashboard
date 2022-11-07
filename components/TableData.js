
import {Table} from "antd";
import {useSelector,useDispatch} from 'react-redux';
import {capitalizeFirstLetter} from "../utils/textUtils"
import Moment from 'react-moment';
import moment from 'moment';
import React from "react";
import {addFilters} from "../redux/auth/userSlice";

const Str = require('@supercharge/strings')


function TableData({data,paginateApi,filters,paginate}) {

  let filtersData = useSelector((state) => state.auth)
  let dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(addFilters({date:{}}))
  },[])

  console.log(filtersData.filterObject)

  if(!data || !data.data) {
    return (
      <>
        <div className="text-center mt-4">
          <h6>Work needs to be done for table</h6>
        </div>
      </>
    )
  }

  
  let pageCount = parseInt(data.totalCount / 20);

  let objectData = data.data.find((item,index) => index == 0)
  let mapData = objectData ? Object.keys(objectData) : [];

  let lp = mapData.map((item,i) => {
      return {
          title: `${Str(item).replaceAll('_', ' ').title().get()}`,
          dataIndex: `${item}`,
          key: i,
          width: 180,
          textWrap: 'word-break',
          ellipsis: true,
          // fixed: i < 1 ? 'left' : null,
          render: (val) => (
            <>
              {
                  moment(val, moment.ISO_8601, true).isValid() && val != null && typeof val !== 'number'
                  ?
                      <>
                          <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                          <Moment format="hh:mm:ss A">{val}</Moment>
                      </>
                  :
                      val
              }
            </>
          )
      }
  })

  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-12">
          <Table
              style={{ whiteSpace: 'break-spaces'}}
              loading={data.loading}
              columns={lp}
              dataSource={data.data}
              scroll={{
                x: 1300,
                y: 300,
              }}
              pagination={paginate == true ? {
                pageSize:20,
                total: pageCount,
                onChange: (page) => {
                  dispatch(paginateApi({...filtersData.filterObject,page:page}))
                },
              } : false}
            />
        </div>
      </div>
    </>
    
  )
}

export default TableData