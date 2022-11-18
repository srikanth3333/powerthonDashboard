import {useEffect, useState} from 'react';
import { Input,Select, DatePicker,Button, Spin } from 'antd';
import {useDispatch} from 'react-redux';
import {addFilters} from "../redux/auth/userSlice";
import Download from "./Download";
import {getHierarchyData} from "../redux/hierarchy/hierarchySlice";

function FilterCard({title,objectData,paginateApi,data,finalCount,
                    download,db,selectLoading,staticData}) {

  const [objArr, setObjArr] = useState(objectData)
  let dispatch = useDispatch();
  let filtersObject = {
                        "category": "",
                        "circle_name": "",
                        "division_name": "",
                        "subdivision_name": "",
                        "division_name": "",
                        "sub_category": "",
                        "dc_name": "",
                        "region": "",
                        "feeder_type":"",
                        "db":db
                    }
  
  const onChangeHandler = (val,lop) => {
    setObjArr({...objArr, [lop]:val})
    dispatch(paginateApi({...objArr, [lop]:val}))
    dispatch(addFilters({"data":{...objArr, [lop]:val}}))
    dispatch(getHierarchyData({...objArr, [lop]:val,"db":db}))
  }

  useEffect(() => {
    dispatch(getHierarchyData(filtersObject))
  }, [])

  const handleReset = () => {
    setObjArr(objectData)
    dispatch(paginateApi(objectData))
    dispatch(getHierarchyData(filtersObject))
  }


  return (
    <>
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h3 className="filter-card-title">{title}</h3>
                    {
                        download == false ? null : <Download apiObject={objArr} finalCount={finalCount} />
                    }
                </div>
            </div>
            {
                data && data.map((item, i) => {
                    if(item.type == "text") {
                        return (
                            <>
                                <div className="col-lg-3">
                                    <label htmlFor="">{item.label}</label>
                                    <Input placeholder={item.label} 
                                            allowClear
                                           onChange={(val) => onChangeHandler(val.target.value,item.value)} 
                                    />
                                </div>
                            </>
                        )
                    }else if(item.type == "select") {
                        return (
                            <>
                                <div className="col-lg-3">
                                <label htmlFor="">{item.label}</label>
                                    {
                                        staticData == true
                                        ?
                                            <Select
                                                allowClear
                                                showSearch
                                                value={objArr && objArr[item.value]}
                                                style={{ width: '100%' }}
                                                onChange={(val) => onChangeHandler(val,item.value)}
                                                >
                                                {
                                                    item.filterList?.map((val, index) => (
                                                        <Select.Option value={val} key={index}> 
                                                            {val}
                                                        </Select.Option>
                                                    ))
                                                }
                                                
                                            </Select>
                                        :
                                        <Select
                                            allowClear
                                            showSearch
                                            loading={selectLoading}
                                            value={objArr && objArr[item.value]}
                                            style={{ width: '100%' }}
                                            notFoundContent={selectLoading ? <Spin size="small" /> : null}
                                            onChange={(val) => onChangeHandler(val,item.value)}
                                            >
                                            {
                                                selectLoading ?
                                                    <Select.Option style={{textAlign: 'center'}}> 
                                                        <Spin size="small" />
                                                    </Select.Option>
                                                : item.filterList?.map((val, index) => (
                                                    <Select.Option value={val} key={index}> 
                                                        {val}
                                                    </Select.Option>
                                                ))
                                            }
                                            
                                        </Select>
                                    }
                                    
                                </div>
                            </>
                        )
                    }else if(item.type === 'date') {
                        return (
                            <>
                                <div className="col-lg-3">
                                    <label htmlFor="">{item.label}</label>
                                    <DatePicker  
                                        allowClear
                                        format="DD-MM-YYYY" 
                                        style={{width:'100%'}} 
                                        onChange={(date,dateString) => {
                                            return onChangeHandler(date && date._d,item.value)
                                        }} />
                                </div>
                            </>
                        )
                    }
                })
            }
            <div className="col-lg-3">
                <label htmlFor="">&nbsp;</label>
                <br />
                <Button type="primary"onClick={handleReset}>Reset Filters</Button>
            </div>
        </div>
    </>
  )
}

export default FilterCard