import Head from "next/head";
import * as S from '../public/assets/styles/Home.style'
import Bio from "../Components/Bio/Bio";
import Project from "../Components/project/Card/Card";
import SideBar from "../Components/Global/SideBar";
import { getAllPosts} from '../Lib/Projects'
import Skills from "../Components/Skills/Skills";
import Wave from "../Components/Global/Wave";
import Carousel from "../Components/Carousel/Carousel";
import ToggleTheme from "../Components/Global/ToggleTheme";


// Página principal do projeto
export default function Home({allPosts,theme,setTheme}) {
  const heroPost = allPosts
  console.log(setTheme)

  const changeTheme=()=>{
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  return (
    <S.ThemeProvider >
  {/* // Barra de pesquisa, tanto a web e reponsiva */}
  {/* Header da página */}
      <Head>
        <title>Porfólio Kaue-LS</title>
        <meta name="description" content="Portfólio" />
        <meta lang="pt" xmlns="http://www.w3.org/1999/xhtml"/>
        <link rel="icon" href="./public/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

{/* Fundo animado */}
      <S.Background>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
          <li>{"{K}"}</li>
        </S.Background>
        <Wave></Wave>     
{/* ---------------------- */}
      

{/* Componentes de texto da página */}
      <S.Main>
      <S.Texts>
        <S.Title>Kauê Leite</S.Title>
        <S.SubTitle>Portfólio</S.SubTitle>
      </S.Texts>
    <S.Content bgColor={theme==='dark'?'#171717':'#ffffff'} fontColor={theme==='dark'?'#ffffff':'#171717'}>
{/* Bio sobre mim */}
      <S.BioArea id="Bio">
      <h1 id="Title-Project">Sobre mim:</h1>
      <Bio ></Bio>
      </S.BioArea>

{/* Area dos projetos */}
      <S.ProjectArea id={'Projetos'}>
      <h1 id="Title-Project">Projetos:</h1>
      <Carousel>
          {heroPost.map((item,index)=>(
             <Project key={index}
              bgColor={theme==='dark'?'#171717':'#ffffff'} 
              fontColor={theme==='dark'?'#ffffff':'#171717'}
               title={item.title}
               id={item.id}
               coverImage={item.coverImage}
               date={item.date}
               author={item.author}
               slug={item.slug}
               utilizado={item.utilizado}
             />
          ))}
          </Carousel>
        </S.ProjectArea>

{/* Area das habilidades */}
        <S.SkillsArea id="Habilidades">
      <h1 id="Title-Skills">Habilidades</h1>
          <Skills></Skills>
        </S.SkillsArea>
  
        </S.Content>
        <ToggleTheme theme={theme} changeTheme={()=>changeTheme()}></ToggleTheme>

      </S.Main>
      </S.ThemeProvider>
  );
}

// Buscando os proejtos que foram convertidos para html
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'id',
    'author',
    'coverImage',
    'utilizado',
  ])

  return {
    props: { allPosts },
  }
}
