import Head from "next/head";
import * as S from '../public/styles/Home'
import Bio from "../Components/Bio/Bio";
import Project from "../Components/project/Card/Card";
import SideBar from "../Components/Global/SideBar";
import { getAllPosts} from '../Lib/Projects'
import Skills from "../Components/Skills/Skills";

export default function Home({allPosts}) {
  const heroPost = allPosts
  return (
  <SideBar>
  
      <Head>
        <title>Porfólio Kaue-LS</title>
        <meta name="description" content="Portfólio" />
        <meta lang="pt" xmlns="http://www.w3.org/1999/xhtml"/>
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
      <S.ProjectArea id={'Projetos'}>
      <h1 id="Title-Project">Projetos</h1>
          {heroPost.map((item,index)=>(
             <Project key={index}
               title={item.title}
               coverImage={item.coverImage}
               date={item.date}
               author={item.author}
               slug={item.slug}
               utilizado={item.utilizado}
             />
          ))}
        </S.ProjectArea>
        <S.SkillsArea id="Habilidades">
      <h1 id="Title-Skills">Habilidades</h1>
          <Skills>

          </Skills>
        </S.SkillsArea>
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
    'utilizado',
  ])

  return {
    props: { allPosts },
  }
}
