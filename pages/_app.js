import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'antd/dist/antd.css'
import Layout from "../components/Layout";
import store from '../redux/store';
import {Provider} from 'react-redux';
import Lottie from "lottie-react";
import loader from "../utils/loading.json";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = React.useState(true)
  const router = useRouter();


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
  
  if(['/login'].includes(router.pathname)) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
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
