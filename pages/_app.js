import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'antd/dist/antd.css'
import Layout from "../components/Layout";
import store from '../redux/store';
import {Provider} from 'react-redux';
import Lottie from "lottie-react";
import loader from "../utils/loading.json";


function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  if(loading) {
    return (
      <div style={{minHeight:'100vh',alignItems: 'center',justifyContent: 'center',display:'flex'}}>
            <Lottie animationData={loader} loop={true} style={{height:'300px',}}  />
      </div>
    )
  }
  
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp;
