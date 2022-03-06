import { pegarTodosOsIds,PegarDadosDosPost } from "../../Lib/Projects";
export default function Post({ dadosDosPosts }) {
    console.log(dadosDosPosts)

    return(
      <Layout>
  
        {/* Título da página que é o nome do nosso post */}
        <Head>{dadosDosPosts.title}</Head>
  
        <article>
        <img src={dadosDosPosts.image}/>
          {/* Nome do post */}
          <h1>{dadosDosPosts.title}</h1>
  
          {/* Data do post */}
          <div>
            <Date dateString={dadosDosPosts.date} />
          </div>
  
          {/* Conteúdo do post em html */}
          <div dangerouslySetInnerHTML={{ __html: dadosDosPosts.conteudoHtml }} />
  
        </article>
      </Layout>
    )
  }
  
  export async function getStaticPaths() {
    const paths = pegarTodosOsIds();
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const dadosDosPosts = await PegarDadosDosPost(params.id)
    return {
      props: {
        dadosDosPosts
      }
    }
  }