import"../public/assets/styles/Globals.css";
import React,{useState} from "react";
import { ThemeProvider } from "styled-components";
import SideBar from "../Components/Global/SideBar";


const LightTheme={
  pageBackground:'white',
  titleColor:"#000000",
}
const DarkTheme={
  pageBackground:'#696969',
  titleColor:"#000000",
}
const themes={
  light:LightTheme,
  dark:DarkTheme
}
export default function MyApp({Component,pageProps}){
  const [theme,setTheme]=useState('light')
//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light')
// }

    return(
      <SideBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
          <Component theme={theme} setTheme={setTheme} {...pageProps} />
      </div>
      </SideBar>
    )
  }

