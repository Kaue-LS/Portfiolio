import Head from "next/head";
import * as S from '../public/styles/Home'
import Bio from "../Components/Bio/Bio";
import Project from "../Components/project/Card/Card";
import SideBar from "../Components/Global/NavBar";
import { getAllPosts} from '../Lib/Projects'

export default function Home({allPosts}) {
  const heroPost = allPosts
  return (
  <SideBar>
  
      <Head>
        <title>Porfólio Kaue-LS</title>
        <meta name="description" content="Portfólio" />
        <meta lang="pt-br"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <S.Background>
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
        </S.Background>
      <S.Main>
      
     
      <S.Texts>
        <S.Title>Kauê Leite</S.Title>
        <S.SubTitle>Portfólio</S.SubTitle>
      </S.Texts>
      <Bio ></Bio>
      <S.Project id={'Projetos'}>
    
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
        </S.Project>
      </S.Main>
      
    </SideBar>
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
