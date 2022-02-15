import '../styles/globals.css';
import SideBar from '../Components/SideBar/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <SideBar>
    <Component {...pageProps} />
    </SideBar>
    </div>
  );
}

export default MyApp;
