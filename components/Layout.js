import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({children}) {

  const [sidebarActive, setSidebarActive] = React.useState(true)
  const [matches, setMatches] = React.useState(typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : null)

  

  React.useEffect(() => {
    if (typeof window !== "undefined") {
        window
        .matchMedia("(max-width: 1348px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }
    
  }, []);

  console.log(matches)

  return (
    <>
        <div className="banner" />
        <div className="layout index-fix">
            <div className="container-fluid">
                <div className="row">
                    {
                        sidebarActive
                        ?
                          <>
                            <div className={matches == true ? `position-fixed fix` :`col-lg-3 fix`}>
                                <Sidebar matches={matches} setSidebarActive={setSidebarActive}/>
                            </div>
                            <div className={matches == true ? `col-lg-9` :`col-lg-9`}>
                                <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
                                {children}
                            </div>
                          </>  
                        :  
                        <div className="col-lg-12">
                            <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
                            {children}
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout;