import Head from "next/head";
import styles from "../styles/Home.module.css";
import Bio from "../Components/Bio";
import Project from "../Components/project/Card/Card";
import { getAllPosts} from '../Lib/Projects'

export default function Home({allPosts}) {
  const heroPost = allPosts
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
      <main className={styles.main}>
      
     
      <div id={styles.Texts}>
        <h1 className={styles.Title}>Kauê Leite</h1>
        <h3 className={styles.SubTitle}>Portfólio</h3>
      </div>
      <Bio ></Bio>
      <div className={styles.projects} id={'Projetos'}>
    
          {heroPost.map((item,index)=>(
             <Project key={index}
               title={item.title}
               coverImage={item.coverImage}
               date={item.date}
               author={item.author}
               slug={item.slug}
               excerpt={item.excerpt}
             />
          ))}
        </div>
      </main>
      
    </div>
  );
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
