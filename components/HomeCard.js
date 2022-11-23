import { Input,Select, DatePicker,Tabs } from 'antd';
import moment from 'moment';
import React from 'react';

function HomeCard({title,countArray}) {
  return (
    <div>
        <div className="card mt-3">
        <div className="card-body">
            <h2 className="title">{title}</h2>
            <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Circle</label>
                        <Select
                            allowClear
                            showSearch
                            style={{ width: '100%' }}
                            >
                            <Select.Option> 
                                {"val"}
                            </Select.Option>
                        </Select>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Division</label>
                        <Select
                            allowClear
                            showSearch
                            style={{ width: '100%' }}
                            >
                            <Select.Option> 
                                {"val"}
                            </Select.Option>
                        </Select>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Zone</label>
                        <Select
                            allowClear
                            showSearch
                            style={{ width: '100%' }}
                            >
                            <Select.Option> 
                                {"val"}
                            </Select.Option>
                        </Select>
                    </div>
                    <div className="col-lg-6">
                            <label htmlFor="">Month</label>
                            <DatePicker  
                            allowClear
                            format="DD-MM-YYYY" 
                            style={{width:'100%'}} 
                            onChange={(date,dateString) => {
                                let finalDate = moment(date).format('YYYY-MM-DD');
                            }} />
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    {
                        countArray && countArray.map((item,index) => (
                            <div className="col-lg-6 mt-3" key={index}>
                                <div className={index % 3 == 0 ? `box-card color-yellow` : `box-card color-grey`}>
                                    <h5 className="box-card-title">{item.count}</h5>
                                    <h5 className="box-card-text">{item.name}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCard