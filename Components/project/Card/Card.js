import Link from "next/link";
import * as S from '../../../styles/Projects'
import CoverImage from "./CoverImages";
import  Date from './date'
export default function Card(dadosDosPost){
    return(
      
        <S.Project>
            <S.Card>
            <div>
                <CoverImage src={dadosDosPost.coverImage} alt={dadosDosPost.title}  height={230} width={400}></CoverImage>
            </div>
            <S.Data>
            <span>Publicado em: </span><Date dateString={dadosDosPost.date}></Date>
            <h1>{dadosDosPost.title}</h1>
            <p>{dadosDosPost.excerpt}</p>
            </S.Data>
            </S.Card>
        </S.Project>
    )
}

