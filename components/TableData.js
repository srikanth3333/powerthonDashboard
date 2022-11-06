
import {Table} from "antd";
import {useSelector,useDispatch} from 'react-redux';
import {capitalizeFirstLetter} from "../utils/textUtils"
const Str = require('@supercharge/strings')


function TableData({data,paginateApi,filters,paginate}) {

  if(!data || !data.data) {
    return (
      <>
        <div className="text-center mt-4">
          <h6>Work needs to be done for table</h6>
        </div>
      </>
    )
  }

  let dispatch = useDispatch()
  let pageCount = parseInt(data.totalCount / 20);

  let objectData = data.data.find((item,index) => index == 0)
  let mapData = objectData ? Object.keys(objectData) : [];

  let lp = mapData.map((item,i) => {
      return {
          title: `${Str(item).replaceAll('_', ' ').title().get()}`,
          dataIndex: `${item}`,
          key: i,
          width: 120,
          textWrap: 'word-break',
          ellipsis: true,
          fixed: i < 1 ? 'left' : null,
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
                  dispatch(paginateApi({...filters,page:page}))
                },
              } : false}
            />
        </div>
      </div>
    </>
    
  )
}

export default TableData