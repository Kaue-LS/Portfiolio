import"../public/styles/Globals.css";



function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}
export default function MyApp({Component,pageProps}){

 
    return(
      <SafeHydrate>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
          <Component {...pageProps} />
      </div>
    </SafeHydrate>

    )
  }

