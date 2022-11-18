import Head from 'next/head'
import React from 'react';
import { Input,Select, DatePicker,Tabs } from 'antd';
import moment from 'moment';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Powerthon Dashboard</title>
        <meta name="description" content="Powerthon" />
      </Head>
      <div className="count-card">
        <div className="row">
          <div className="col-lg-6">
              <div className="card mt-3">
                <div className="card-body">
                    <h2 className="title">Billing Data</h2>
                    <h3 className="sub-title my-4">Bill Data</h3>
                    <div className="row">
                      <div className="col-lg-6">
                          <label htmlFor="">Circle</label>
                          <Select
                              allowClear
                              showSearch
                              // value={objArr && objArr[item.value]}
                              style={{ width: '100%' }}
                              // onChange={(val) => onChangeHandler(val,item.value)}
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
                              // value={objArr && objArr[item.value]}
                              style={{ width: '100%' }}
                              // onChange={(val) => onChangeHandler(val,item.value)}
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
                              // value={objArr && objArr[item.value]}
                              style={{ width: '100%' }}
                              // onChange={(val) => onChangeHandler(val,item.value)}
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
                                  let finalDate = moment(date).format('YYYY-MM-DD');;
                                  // return onChangeHandler(finalDate,item.value)
                              }} />
                       </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6 mt-3">
                        <div className="box-card color-yellow">
                            <h5 className="box-card-title">30332</h5>
                            <h5 className="box-card-text">Total Consumer Billed</h5>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="box-card color-grey">
                            <h5 className="box-card-title">30332</h5>
                            <h5 className="box-card-text">Current Bill Amount</h5>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="box-card color-grey">
                            <h5 className="box-card-title">30332</h5>
                            <h5 className="box-card-text">Arrears</h5>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="box-card color-grey">
                            <h5 className="box-card-title">30332</h5>
                            <h5 className="box-card-text">Total Bill Amount</h5>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-lg-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h2 className="title">Payments Data</h2>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Against Current Bill " key="1">
                      <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Circle</label>
                            <Select
                                allowClear
                                showSearch
                                // value={objArr && objArr[item.value]}
                                style={{ width: '100%' }}
                                // onChange={(val) => onChangeHandler(val,item.value)}
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
                                // value={objArr && objArr[item.value]}
                                style={{ width: '100%' }}
                                // onChange={(val) => onChangeHandler(val,item.value)}
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
                                // value={objArr && objArr[item.value]}
                                style={{ width: '100%' }}
                                // onChange={(val) => onChangeHandler(val,item.value)}
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
                                    let finalDate = moment(date).format('YYYY-MM-DD');;
                                    // return onChangeHandler(finalDate,item.value)
                                }} />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6 mt-3">
                          <div className="box-card color-yellow">
                              <h5 className="box-card-title">30332</h5>
                              <h5 className="box-card-text">Total Consumer Billed</h5>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <div className="box-card color-grey">
                              <h5 className="box-card-title">30332</h5>
                              <h5 className="box-card-text">Current Bill Amount</h5>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <div className="box-card color-grey">
                              <h5 className="box-card-title">30332</h5>
                              <h5 className="box-card-text">Arrears</h5>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <div className="box-card color-grey">
                              <h5 className="box-card-title">30332</h5>
                              <h5 className="box-card-text">Total Bill Amount</h5>
                          </div>
                        </div>
                      </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Against Arrears" key="2">
                      Data 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Against Bill Net" key="3">
                      Data 3
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
