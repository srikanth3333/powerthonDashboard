import { PieChartOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';


function CountCard({data,loading}) {
  return (
    <>
        <div className="row mt-4">
            {
                loading ?
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <Skeleton active 
                                    paragraph={{
                                        rows: 1,
                                    }}
                                    size="small"
                                />
                            </div>
                        </div>
                    </div>
                :
                data.map((list,i) => (
                    <div className="col-lg-4" key={i}>
                        <div className={i >= 3 ? "card mt-3 shadow" : "card shadow"}>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="count-name">{list.name}</p>
                                        <p className="count-count">{list.count}</p>
                                    </div>
                                    <PieChartOutlined className="count-icon" twoToneColor="#F7C514" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </>
  )
}

export default CountCard