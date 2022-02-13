import '../styles/globals.css';
import SideBar from '../Components/SideBar/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <SideBar> </SideBar>
    <Component {...pageProps} />

    </div>
  );
}

export default MyApp;
