import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const CaminhoDoDiretorio= path.join(process.cwd(),'../posts/Projetos');

export function PegarPostsPorData(){
    const NomeDosArquivos=fs.readSync(CaminhoDoDiretorio);
    const dadosDosPost=NomeDosArquivos.map(arquivo=>{
        const id= arquivo.replace(/\.md$/,'')

        const caminhoDeCadaPost=path.join(CaminhoDoDiretorio,arquivo)

        const conteudoDoArquivo=fs.readFileSync(caminhoDeCadaPost)

        const formatadorMatter=matter(conteudoDoArquivo)

        return{
            id,...formatadorMatter.data
        }

    })  
    return dadosDosPost.sort((a,b)=>{
        if (a.date < b.date) {
            return 1
          } else {
            return -1
          }
    }) 
}
export function pegarTodosOsIds() {
    const nomeDosArquivos = fs.readdirSync(CaminhoDoDiretorio)
    return nomeDosArquivos.map( arquivo => {
      return {
        params: {
          id: arquivo.replace(/\.md$/, '')
        }
      }
    })
  }

export async function PegarDadosDosPost(id){
    const caminhoDooArquivo = path.join(CaminhoDoDiretorio,`${id}.md`)
    const conteudoDoArquivo=fs.readFileSync(caminhoDooArquivo,'utf-8')
    const formatadorMatter=matter(conteudoDoArquivo)
    const conteudoProcessado=await remark()
    .use(html)
    .process(formatadorMatter.content)

    const conteudoHtml=conteudoProcessado.toString()

    return{
        id,
        conteudoHtml,
        ...formatadorMatter.data
    }
}