import Link from "next/link";
import * as S from '../../../styles/Projects'
import CoverImage from "./CoverImages";
import  Date from './date'
export default function Card(dadosDosPost){
    console.log(dadosDosPost)
    return(
      
        <S.Project>
        <Link as={`/posts/${dadosDosPost.slug}`} href={`/posts/[slug]`}>

            <S.Card>
            <div>
                <CoverImage src={dadosDosPost.coverImage} alt={dadosDosPost.title} slug={dadosDosPost.slug} height={230} width={400}></CoverImage>
            </div>
            <S.Data>
            <span>Publicado em: </span><Date dateString={dadosDosPost.date}></Date>
            <h1>{dadosDosPost.title}</h1>
            <p>{dadosDosPost.excerpt}</p>
            </S.Data>
            </S.Card>
            </Link>
        </S.Project>
    )
}

