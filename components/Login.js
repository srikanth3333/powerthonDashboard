import React from 'react';
import {Input, Button, Checkbox, Divider} from "antd";
import { UserOutlined,SecurityScanOutlined } from '@ant-design/icons';


function Login() {

 const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login">
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col-lg-6">
                    <h5 className="text-login">Welcome to Bharath Smart Services Platform</h5>
                    {/* <p className="login-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
                    <div className="mt-4 px-login">
                        <div className="card py-4" style={{backgroundColor:'#F8FAFC'}}>
                            <div className="card-body">
                                <h6 className="mb-3">Sign In With</h6>
                                <Divider />
                                <p className=" text-center card-text-login my-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <form className="form">
                                    <div className="form-group">
                                        <Input size="large" placeholder="email" prefix={<UserOutlined />} />
                                    </div>
                                    <div className="form-group">
                                        <Input.Password
                                            placeholder="password"
                                            prefix={<SecurityScanOutlined />}
                                            size="large"
                                            visibilityToggle={{
                                                visible: passwordVisible,
                                                onVisibleChange: setPasswordVisible,
                                            }}
                                        />
                                        <Checkbox className="mt-2" >Remember me</Checkbox>
                                    </div>
                                    <div className="form-group">
                                        <Button type="primary">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login