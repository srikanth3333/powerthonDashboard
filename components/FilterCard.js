import {useState} from 'react';
import { Input,Select, DatePicker,Button } from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import {addFilters} from "../redux/auth/userSlice";
import Download from "./Download";

function FilterCard({title,objectData,paginateApi,data,finalCount, download}) {

  const [objArr, setObjArr] = useState(objectData)
  let dispatch = useDispatch();
  
  const onChangeHandler = (val,lop) => {
    setObjArr({...objArr, [lop]:val})
    dispatch(paginateApi({...objArr, [lop]:val}))
    dispatch(addFilters({"data":{...objArr, [lop]:val}}))
  }

  const handleReset = () => {
    setObjArr(objectData)
    dispatch(paginateApi(objectData))
  }

  let filterAreas = (selectedItem,selectedData,label) => 
                    selectedItem != '' ? selectedData.find(item => item._id == selectedItem).list
                    :  null

  let mainObj = (selectedItem,selectedData,label) => selectedData.map((item) => item.list)


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
                                    <Select
                                        allowClear
                                        showSearch
                                        value={objArr && objArr[item.value]}
                                        style={{ width: '100%' }}
                                        onChange={(val) => onChangeHandler(val,item.value)}
                                    >
                                        {/* {
                                              filterAreas(item.selected,item.filterList,item.label) !== null 
                                            ? filterAreas(item.selected,item.filterList,item.label).map((val, index) => (
                                                <Select.Option value={val} key={index}> 
                                                    {val}
                                                </Select.Option>
                                            )) : null
                                        } */}

                                        {
                                              mainObj(item.selected,item.filterList,item.label).flat() !== null 
                                            ? mainObj(item.selected,item.filterList,item.label).flat().map((val, index) => (
                                                <Select.Option value={val} key={index}> 
                                                    {val}
                                                </Select.Option>
                                            )) : null
                                        }
                                        
                                    </Select>
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