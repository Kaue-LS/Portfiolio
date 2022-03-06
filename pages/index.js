import Head from "next/head";
import styles from "../styles/Home.module.css";
import Bio from "../Components/Bio/Layout";
import Project from "../Components/project/Layout/layout";
import { getAllPosts} from '../Lib/Projects'
import MoreProjects from "../Components/project/Layout/MoreProject";

export default function Home({allPosts}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
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
      {heroPost && (
            <Project
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreProjects posts={morePosts} />}

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
