import { Breadcrumb, Input } from 'antd';
import { SearchOutlined, UserOutlined,AlignLeftOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import {capitalizeFirstLetter} from "../utils/textUtils"
import Link from 'next/link'

function Header({sidebarActive,setSidebarActive}) {
 
 const router = useRouter();

 let name = capitalizeFirstLetter(router.pathname == "/" ? 'Dashboard' : router.pathname.split('/')[1])

  return (
    <>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div>
                <AlignLeftOutlined className="icon" onClick={() => setSidebarActive(!sidebarActive)} />
                <Breadcrumb className="text-white">
                    <Breadcrumb.Item>
                        <Link href="/" className="text-white">{'Home'}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link href="" className="text-white">{name}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h4 className="color-purple">{name}</h4>
            </div>
            <div className="d-flex align-items-center">
                <div className="me-3">
                    <Input size="large" placeholder="Type here..." prefix={<SearchOutlined />} />
                </div>
                <div className="d-flex align-items-baseline">
                        <UserOutlined className="text-white me-2" style={{fontSize:'20px'}} />
                        <h6 className="text-white">Sign Out</h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header