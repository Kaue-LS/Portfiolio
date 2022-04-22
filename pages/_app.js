import"../public/assets/styles/Globals.css";




export default function MyApp({Component,pageProps}){

 
    return(
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
          <Component {...pageProps} />
      </div>

    )
  }

