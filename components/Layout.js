import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({children}) {

    const [targetReached, setTargetReached] = React.useState(false)
    const [activeSidebar, setActiveSidebar] = React.useState(true)

    const updateTarget = React.useCallback((e) => {
      if (e.matches) {
        setTargetReached(true)
      }else {
        setActiveSidebar(true)
        setTargetReached(false)
      }
    }, [])

    React.useEffect(() =>
    {
      const media = window.matchMedia(`(max-width: ${"1228"}px)`)
      media.addEventListener('change', updateTarget)
      if (media.matches) setTargetReached(true)
      return () => media.removeEventListener('change', updateTarget)
    }, [])

    console.log(targetReached)

  return (
    <>
        <div className="banner" />
        <div className="layout index-fix">
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly">
                    {
                        activeSidebar == true ?
                        <div className={targetReached ==  true && activeSidebar == true ? "content-sidebar" : "default-sidebar"}>
                            <Sidebar targetReached={targetReached} activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
                        </div> : null
                    }
                    
                    <div className="content">
                        <Header targetReached={targetReached} activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}   />
                        {children}
                    </div>
            
                </div>
            </div>
        </div>
    </>
  )
}




export default Layout;