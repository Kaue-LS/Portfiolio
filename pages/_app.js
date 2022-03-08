import '../styles/globals.css';
import SideBar from '../Components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
      <SideBar>
      
    <Component {...pageProps} />
    </SideBar>
    </div>
  );
}

export default MyApp;
