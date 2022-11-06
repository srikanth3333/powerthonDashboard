import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'antd/dist/antd.css'
import Layout from "../components/Layout";
import store from '../redux/store';
import {Provider} from 'react-redux';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp;
