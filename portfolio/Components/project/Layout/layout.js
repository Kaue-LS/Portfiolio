import Link from "next/link";
import * as S from '../../../styles/Projects'
export default function Card(dadosDosPost){
    console.log(dadosDosPost.coverImage)
    return(
        <S.Project>
            <div>
                <img alt={dadosDosPost.title} src={dadosDosPost.coverImage} />
            </div>
            <div>
            <h1>{dadosDosPost.title}</h1>
            </div>
        
        </S.Project>
    )
}

