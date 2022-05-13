import Head from "next/head";
import * as S from '../public/assets/styles/Home.style'
import Bio from "../Components/Bio/Bio";
import Project from "../Components/project/Card/Card";
// import SideBar from "../Components/Global/SideBar";
import { getAllPosts} from '../Lib/Projects'
import Skills from "../Components/Skills/Skills";
import Wave from "../Components/Global/Wave";
import Carousel from "../Components/Carousel/Carousel";
// import Form from "../Components/Form/Form";


// Página principal do projeto
export default function Home({allPosts}) {
  const heroPost = allPosts
  // console.log(setTheme)


  return (
    <S.ThemeProvider >
  {/* // Barra de pesquisa, tanto a web e reponsiva */}
  {/* Header da página */}
      <Head >
        <title>Porfólio Kaue-LS</title>
        <meta name="description" content="Portfólio" />
        <meta lang="pt" xmlns="http://www.w3.org/1999/xhtml"/>
        <link rel="icon" href="./public/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      
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
        <Wave></Wave>     
        </S.Background>
{/* ---------------------- */}
      

{/* Componentes de texto da página */}
      <S.Texts>
        <S.Title>Kauê Leite</S.Title>
        <S.SubTitle>Portfólio</S.SubTitle>
      </S.Texts>
      
    <S.Content >
      <S.BioArea id="Bio">
      <h1 id="Title-Project">Sobre mim:</h1>
      <Bio ></Bio>
      </S.BioArea>

      <S.ProjectArea id={'Projetos'}>
      <h1 id="Title-Project">Projetos:</h1>
      <Carousel>
          {heroPost.map((item,index)=>(
             <Project key={index}
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

        <S.SkillsArea id="Habilidades">
      <h1 id="Title-Skills">Habilidades</h1>
          <Skills></Skills>
        </S.SkillsArea>
            
    </S.Content>
       
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
