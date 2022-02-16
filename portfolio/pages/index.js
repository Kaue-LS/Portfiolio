import Head from "next/head";
import styles from "../styles/Home.module.css";
import Bio from "../Components/Bio/Layout";
import Project from "../Components/project/layout";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Porfólio Kaue-LS</title>
        <meta name="description" content="Portfólio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
  

      <main className={styles.main}>
        <ul className={styles.background}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
     
      <div id={styles.Texts}>
        <h1 className={styles.Title}>Kauê Leite</h1>
        <h3 className={styles.SubTitle}>Portfólio</h3>
        </div>
      <Bio></Bio>
      <Project></Project>
      </main>
      
    </div>
  );
}
