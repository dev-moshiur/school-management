import "../styles/globals.css";
import Layout from "../components/Layout";
// import AuthProvider from '../contexts/authContext';
import DataContext from "../contexts/dataContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DataContext>
        {/* <AuthProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </AuthProvider> */}
      </DataContext>
    </>
  );
}

export default MyApp;
