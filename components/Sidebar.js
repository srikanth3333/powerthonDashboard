import Link from 'next/link'
import { HomeFilled, CloseOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";


let listItems = [
    {
        label: 'Dashboard',
        link: '/'
    },
    {
        label: 'Billing Data',
        link: '/billingInformation'
    },
    {
        label: 'Complaints Analysis',
        link: '/complaintsAnalysis'
    },
    {
        label: 'FOC Complaints Data',
        link: '/focComplaint'
    },
    {
        label: 'Billing Complaints Data',
        link: '/customerComplaints'
    },
    {
        label: 'Payments Data',
        link: '/payments'
    },
    {
        label: 'Arrears Report',
        link: '/arrearsReport'
    },
    {
        label: 'Consumer Report',
        link: '/divisionConsumerReport'
    },
]

function Sidebar({activeSidebar,setActiveSidebar,targetReached}) {

  const router = useRouter();

  return (
    <div className="sidebar">
        <div className="card py-1 shadow-md">
            <div className="card-body">
                <div className="logo-box text-center">
                    {
                        targetReached == true ?
                        <div className="d-flex justify-content-end">
                            <CloseOutlined className="icon" onClick={() => setActiveSidebar(!activeSidebar)} />
                        </div> : null
                    }
                    
                    <hr />
                            <h6 className="color-light">POWERED BY</h6>
                            <img src="./img/logo.png" className="img-fluid py-2" alt="" />
                            <h5 className="color-dark"><b>POWERTHON</b></h5>
                    <hr />
                </div>
                <div className="list-items">
                        {
                            listItems.map((item,i) => (
                                <Link href={`${item.link}`} onClick={() => targetReached == true ? setActiveSidebar(false) : null} key={i} className={router.pathname == `${item.link}` ? `a-active` : ''}>
                                    <div className={router.pathname == `${item.link}` ? `active d-flex list-item` : 'd-flex list-item'}>
                                        <HomeFilled className="me-3" />
                                        <p>
                                            {item.label}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                </div>
                <div className="sidebar-footer text-center pt-3">
                    <h4 className="text-dark">Need help?</h4>
                    <p className="text-dark">Please write to <br /> help@Coralinnovation.com</p>
                    <div className="px-4 mt-1">
                        <button className="btn btn-light w-100 py-3">Write Mail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;